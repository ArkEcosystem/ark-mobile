import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { tap } from "rxjs/operators";

import { DelegateActions } from "./delegate.actions";
import { DelegateConfig } from "./delegate.config";
import { DelegateService } from "./delegate.service";
import { Delegate } from "./delegate.types";

export interface DelegateStateModel {
	delegates: Delegate[];
	totalCount: number;
}

export const DELEGATE_STATE_TOKEN = new StateToken<DelegateStateModel>(
	DelegateConfig.KEY,
);

@State<DelegateStateModel>({
	name: DelegateConfig.KEY,
	defaults: {
		delegates: [],
		totalCount: 5,
	},
})
@Injectable()
export class DelegateState {
	constructor(private delegateService: DelegateService) {}

	@Selector()
	public static delegates(state: DelegateStateModel) {
		return state.delegates;
	}

	@Action(DelegateActions.Refresh)
	public refresh(
		ctx: StateContext<DelegateStateModel>,
		action: DelegateActions.Refresh,
	) {
		return this.delegateService.getDelegates(action.payload).pipe(
			tap((delegates) => {
				const state = ctx.getState();
				ctx.patchState({
					delegates: [...state.delegates, ...delegates],
				});
			}),
		);
	}

	@Action(DelegateActions.Clear)
	public clear(ctx: StateContext<DelegateStateModel>) {
		// return ctx.setState(defaults);
	}
}

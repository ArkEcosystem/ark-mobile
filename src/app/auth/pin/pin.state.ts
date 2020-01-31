import {
	Action,
	NgxsOnInit,
	State,
	StateContext,
	StateToken,
} from "@ngxs/store";
import { AuthPinActions } from "./pin.actions";
import { AuthPinConfig } from "./pin.config";
import { AuthPinService } from "./pin.service";
import { AuthPinStateModel } from "./pin.type";

export const AUTH_PIN_STATE_TOKEN = new StateToken<AuthPinState>(
	AuthPinConfig.TOKEN,
);

@State<AuthPinStateModel>({
	name: AUTH_PIN_STATE_TOKEN,
	defaults: {
		isRegistered: false,
	},
})
export class AuthPinState implements NgxsOnInit {
	constructor(private authPinService: AuthPinService) {}

	public ngxsOnInit(ctx: StateContext<AuthPinStateModel>): void {
		ctx.dispatch(new AuthPinActions.Load());
	}

	@Action(AuthPinActions.Load)
	public load(ctx: StateContext<AuthPinStateModel>): void {
		this.authPinService.getEncryptedPassword().subscribe(password => {
			ctx.patchState({
				isRegistered: !!password,
			});
		});
	}
}

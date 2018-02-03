import { NgModule } from '@angular/core';
import { TruncateMiddlePipe } from './../pipes/truncate-middle/truncate-middle';
import { UnitsSatoshiPipe } from './../pipes/units-satoshi/units-satoshi';
import { MarketNumberPipe } from './../pipes/market-number/market-number';
import { AccountLabelPipe } from './../pipes/account-label/account-label';
import { TimestampHumanPipe } from './timestamp-human/timestamp-human';
import { TimezonePipe } from './timezone/timezone';
import { SecondsToTimePipe } from './seconds-to-time/seconds-to-time';

@NgModule({
	declarations: [TruncateMiddlePipe,
    UnitsSatoshiPipe,
    MarketNumberPipe,
    AccountLabelPipe,
    TimestampHumanPipe,
    TimezonePipe,
    SecondsToTimePipe],
	imports: [],
	exports: [TruncateMiddlePipe,
    UnitsSatoshiPipe,
    MarketNumberPipe,
    AccountLabelPipe,
    TimestampHumanPipe,
    TimezonePipe,
    SecondsToTimePipe]
})
export class PipesModule {}

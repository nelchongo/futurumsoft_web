import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReCaptchaV3Service, OnExecuteData, OnExecuteErrorData } from 'ng-recaptcha';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService  implements OnInit, OnDestroy {

  public recentError?: { error: any };
  public readonly executionLog: Array<OnExecuteData | OnExecuteErrorData> = [];
  private allExecutionsSubscription: Subscription = new Subscription;
  private allExecutionErrorsSubscription: Subscription = new Subscription;
  private singleExecutionSubscription: Subscription = new Subscription;
  private token = "";

  constructor(private recaptchaV3Service: ReCaptchaV3Service,) {}

  get siteKey(){
    return environment.recaptcha.siteKey;
  }

  ngOnInit(): void {
    this.allExecutionsSubscription = this.recaptchaV3Service.onExecute.subscribe((data) =>
      this.executionLog.push(data),
    );
    this.allExecutionErrorsSubscription = this.recaptchaV3Service.onExecuteError.subscribe((data) =>
      this.executionLog.push(data),
    );
  }

  getToken(action:string): void {
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
    this.singleExecutionSubscription = this.recaptchaV3Service.execute(action).subscribe(
      (token:string) => {
        this.token = token;
        this.recentError = undefined;
      },
      (error) => {
        this.token = "";
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.recentError = { error };
      },
    );
  }

  public ngOnDestroy(): void {
    if (this.allExecutionsSubscription) {
      this.allExecutionsSubscription.unsubscribe();
    }
    if (this.allExecutionErrorsSubscription) {
      this.allExecutionErrorsSubscription.unsubscribe();
    }
    if (this.singleExecutionSubscription) {
      this.singleExecutionSubscription.unsubscribe();
    }
  }

  checkToken(): string {
    return this.token;
  }
}

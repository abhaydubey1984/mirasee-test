import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() { }

  ngAfterViewInit() {

    /**
     * Get HubSpot forms configurations from environment file
     */
    const { region, portalId, formId } = environment.hsFormsConfig;

    /**
     * Load HubSpot form
     */
    (window as any).hbspt.forms.create({
      region,
      portalId,
      formId,
      target: "#hubspotForm"
    });
  }

}

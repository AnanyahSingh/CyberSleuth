/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/` | `/(toptabs)` | `/(toptabs)/` | `/(toptabs)/Closed` | `/(zMyCases)` | `/(zMyCases)/` | `/(zMyCases)/(toptabs)` | `/(zMyCases)/(toptabs)/` | `/(zMyCases)/(toptabs)/Closed` | `/(zMyCases)/Closed` | `/CaseDetails` | `/CaseEvidences` | `/Closed` | `/EditNote` | `/Home` | `/MyReports` | `/Testimonials` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}

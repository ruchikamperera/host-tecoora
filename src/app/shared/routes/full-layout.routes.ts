import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
    {
        path: 'student-dashboard',
        loadChildren: () =>
          import('../../components/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'lawyer-dashboard',
      loadChildren: () =>
        import('../../components/lawyer/lawyer.module').then(m => m.LawyerModule)
    },
    {
      path: 'staff-dashboard',
      loadChildren: () =>
        import('../../components/staff/staff.module').then(m => m.StaffModule)
    },
    {
        path: 'settings',
        loadChildren: () =>
          import('../../components/account-settings/account-settings.module').then(m => m.AccountSettingsModule)
    },
    {
      path: 'analytics',
      loadChildren: () =>
        import('../../components/account-settings/account-settings.module').then(m => m.AccountSettingsModule)
  },
    {
        path: 'job-list',
        loadChildren: () =>
          import('../../components/skilled-job-list/skilled-job-list.module').then(m => m.SkilledJobListModule)
    },
    {
        path: 'map',
        loadChildren: () =>
          import('../../components/regional-map/regional-map.module').then(m => m.RegionalMapModule)
    },
    {
        path: 'analytics-graph',
        loadChildren: () =>
          import('../../components/point-analytics-graph/point-analytics-graph.module').then(m => m.PointAnalyticsGraphModule)
    },
    {
        path: 'status',
        loadChildren: () =>
          import('../../components/visa-process-status/visa-process-status.module').then(m => m.VisaProcessStatusModule)
    },
    {
        path: 'faq',
        loadChildren: () =>
          import('../../components/faq/faq.module').then(m => m.FaqModule)
    },
    {
      path: 'student-profile',
      loadChildren: () =>
        import('../../components/student-profile/student-profile.module').then(m => m.StudentProfileModule)
    },
    {
      path: 'staff-profile',
      loadChildren: () =>
        import('../../components/staff-profile/staff-profile.module').then(m => m.StaffProfileModule)
    },
    {
      path: 'appointment-history',
      loadChildren: () =>
        import('../../components/appointment-history/appointment-history.module').then(m => m.AppointmentHistoryModule)
    },
];
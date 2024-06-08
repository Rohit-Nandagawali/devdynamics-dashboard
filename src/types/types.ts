
export interface ActivityMeta {
    label: string;
    fillColor: string;
}
export interface ActiveDays {
    days: number;
    isBurnOut: boolean;
    insight: string[] | undefined | null
}

export interface TotalActivity {
    name: string;
    value: string;
}
export interface DayWiseChildren {
    count: string;
    label: string;
    fillColor: string;
}
export interface DayWiseActivityItem {
    children: DayWiseChildren[]
}
export interface DayWiseActivity {
    date: string;
    items: DayWiseActivityItem
}

export interface Activity {
    name: string;
    totalActivity: TotalActivity[];
    dayWiseActivity: DayWiseActivity[];
    activeDays: ActiveDays;
}
export interface AuthorWorklog {
    activityMeta: ActivityMeta[];
    rows: Activity[];
}
export interface AuthorWorklogData {
    AuthorWorklog: AuthorWorklog
}

export interface ApiResponse {
    data: AuthorWorklogData
}
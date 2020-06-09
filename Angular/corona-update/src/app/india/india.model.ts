export class IndiaStat {
    cases_time_series: CasesTimeSeries[];
    key_values: KeyValues[];
    statewise: StateWise[];
    tested: Tested[];
}

export class CasesTimeSeries {
    dailyconfirmed: string;
    dailydeceased: string;
    dailyrecovered: string;
    date: string;
    totalconfirmed: string;
    totaldeceased: string;
    totalrecovered: string;
}

export class KeyValues {
    confirmeddelta: string;
    counterforautotimeupdate: string;
    deceaseddelta: string;
    lastupdatedtime: string;
    recovereddelta: string;
    statesdelta: string;
}

export class StateWise {
    active: string;
    confirmed: string;
    deaths: string;
    deltaconfirmed: string;
    deltadeaths: string;
    deltarecovered: string;
    delta: Delta[];
    lastupdatedtime: string;
    recovered: string;
    state: string;
}

export class Tested {
    source: string;
    totalindividualstested: string;
    totalpositivecases: string;
    totalsamplestested: string;
    updatetimestamp: string;
}

export class Delta {
    active: string;
    confirmed: string;
    deaths: string;
    recovered: string;
}

export class District {
    confirmed: number;
    lastupdatedtime: string;
    delta: DeltaDistrict;
}

export class DeltaDistrict {
    confirmed: number;
}

export class DistrictData {
    districtData: District;
}

export class DrilldownData {
    name: string;
    r: number;
    y: number;
    z: number;
    drilldown: string;
}

export class DistrictDrilldownData {
    name: string;
    id: string;
    data: [][];
}

export interface Countries {
  error: boolean;
  msg: string;
  data: countriesData[];
}

export interface countriesData {
  name: string;
  iso2: string;
  iso3: string;
  states: State[];
}

export interface State {
  name: string;
  state_code: string;
}

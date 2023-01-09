export interface ApiResponse<T> {
  data: T | T[];
  success: boolean;
}
export interface ControllerConfig {
  path: string;
}

export interface ControllerDependencies {
  service: any; // Service<T>
  config: ControllerConfig; // Config<T>
}

export interface IModule {
  title: string;
  icon: string;
  items: IPage[];
}

export interface IPage {
  id: string;
  title: string;
  icon: string;
}

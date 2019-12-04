export interface IRole {
    name: string;
    actions: IAction[];
}

export interface IAction {
    label?: string;
    key: string;
    selected?: boolean;
    value?: boolean;
}

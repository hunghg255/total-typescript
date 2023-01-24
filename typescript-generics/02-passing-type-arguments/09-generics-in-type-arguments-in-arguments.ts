export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

const cloneComponent = <TProps>(component: Component<TProps>) => {
  return new Component(component.getProps());
};

const component = new Component({ a: 1, b: 2, c: 3 });

const clonedComponent = cloneComponent(component);

const result = clonedComponent.getProps();

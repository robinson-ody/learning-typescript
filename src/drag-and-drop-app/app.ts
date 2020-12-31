function Autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  const adjMethod: PropertyDescriptor = {
    configurable: true,
    enumerable: true,

    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };

  return adjMethod;
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    const templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
    this.templateElement = templateElement;

    const hostElement = <HTMLDivElement>document.getElementById('app')!;
    this.hostElement = hostElement;

    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = <HTMLFormElement>importedNode.firstElementChild;
    this.element.id = 'user-input';

    this.titleInputElement = <HTMLInputElement>this.element.querySelector('#title')!;
    this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description')!;
    this.peopleInputElement = <HTMLInputElement>this.element.querySelector('#people')!;

    this.configure();
    this.attach();
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      console.log({ title, description, people });
      this.clearInput();
    }
  }

  private gatherUserInput(): [string, string, number] | undefined {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    if (!enteredTitle.trim().length || !enteredDescription.trim().length || !enteredPeople.trim().length) {
      alert('Invalid input!');
      return;
    }

    return [enteredTitle, enteredDescription, +enteredPeople];
  }

  private clearInput() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const projectInput = new ProjectInput();

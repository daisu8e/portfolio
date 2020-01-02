interface Input {
  text?: string;
  textarea?: string;
  select?: string;
  radio?: string;
  checkbox?: string[];
}

export class ModelG {

  text: string;
  textarea: string;
  select: string;
  radio: string;
  checkbox: string[];

  constructor(data: Input = {}) {
    this.text = data.text !== undefined ? data.text : '';
    this.textarea = data.textarea !== undefined ? data.textarea : '';
    this.select = data.select !== undefined ? data.select : '';
    this.radio = data.radio !== undefined ? data.radio : '';
    this.checkbox = data.checkbox !== undefined ? data.checkbox : [];
  }

  update(data: Input): ModelG {
    if (data.text !== undefined) this.text = data.text;
    if (data.textarea !== undefined) this.textarea = data.textarea;
    if (data.select !== undefined) this.select = data.select;
    if (data.radio !== undefined) this.radio = data.radio;
    if (data.checkbox !== undefined) this.checkbox = data.checkbox;
    return this;
  }

  log() {
    console.log(this.text);
  }

}

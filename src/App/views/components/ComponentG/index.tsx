import React, {FC, ChangeEvent} from 'react';

import {ModelG} from 'App/models/entities';

import './index.css';

interface Props {
  model: ModelG;
  onUpdate?: () => void;
}

export const ComponentG: FC<Props> = (props: Props) => {

  const {model, onUpdate} = props;

  function onChangeForText(event: ChangeEvent<HTMLInputElement>) {
    model.text = event.target.value;
    if (onUpdate) onUpdate();
  }

  function onChangeForTextarea(event: ChangeEvent<HTMLTextAreaElement>) {
    model.textarea = event.target.value;
    if (onUpdate) onUpdate();
  }

  function onChangeForSelect(event: ChangeEvent<HTMLSelectElement>) {
    model.select = event.target.value;
    if (onUpdate) onUpdate();
  }

  function onChangeForRadio(event: ChangeEvent<HTMLInputElement>) {
    model.radio = event.target.value;
    if (onUpdate) onUpdate();
  }

  function onChangeForCheckbox(event: ChangeEvent<HTMLInputElement>) {
    model.checkbox = event.target.checked ? [...model.checkbox, event.target.value] : model.checkbox.filter((it) => it !== event.target.value);
    if (onUpdate) onUpdate();
  }

  return (
    <section className="ComponentG">
      <h1>Component G</h1>
      <div>
        <input type="text" value={model.text} onChange={onChangeForText} autoFocus={true}/>
        <div>-> '{model.text}'</div>
      </div>
      <div>
        <textarea value={model.textarea} onChange={onChangeForTextarea}/>
        <div>-> '{model.textarea}'</div>
      </div>
      <div>
        <select value={model.select} onChange={onChangeForSelect}>
          <option value="Select A">Select A</option>
          <option value="Select B">Select B</option>
          <option value="Select C">Select C</option>
        </select>
        <div>-> '{model.select}'</div>
      </div>
      <div>
        <label><input type="radio" value="Radio A" checked={model.radio === 'Radio A'} onChange={onChangeForRadio}/>Radio A</label><br/>
        <label><input type="radio" value="Radio B" checked={model.radio === 'Radio B'} onChange={onChangeForRadio}/>Radio B</label><br/>
        <label><input type="radio" value="Radio C" checked={model.radio === 'Radio C'} onChange={onChangeForRadio}/>Radio C</label><br/>
        <div>-> '{model.radio}'</div>
      </div>
      <div>
        <label><input type="checkbox" value="Checkbox A" checked={model.checkbox.includes('Checkbox A')} onChange={onChangeForCheckbox}/>Checkbox A</label><br/>
        <label><input type="checkbox" value="Checkbox B" checked={model.checkbox.includes('Checkbox B')} onChange={onChangeForCheckbox}/>Checkbox B</label><br/>
        <label><input type="checkbox" value="Checkbox C" checked={model.checkbox.includes('Checkbox C')} onChange={onChangeForCheckbox}/>Checkbox C</label><br/>
        <div>-> '{model.checkbox.join(', ')}'</div>
      </div>
    </section>
  );
};

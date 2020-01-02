import React, {FC, useState, ChangeEvent} from 'react';

import {ModelG} from 'App/models/entities';

import {Nav, ComponentG} from 'App/views/components';
import './index.css';

export const ViewG: FC = () => {

  const [modelG] = useState(new ModelG());
  const [, setTimestamp] = useState(new Date());

  function render() {
    setTimestamp(new Date());
  }

  function onChangeForText(event: ChangeEvent<HTMLInputElement>) {
    modelG.text = event.target.value;
    render();
  }

  function onChangeForTextarea(event: ChangeEvent<HTMLTextAreaElement>) {
    modelG.textarea = event.target.value;
    render();
  }

  function onChangeForSelect(event: ChangeEvent<HTMLSelectElement>) {
    modelG.select = event.target.value;
    render();
  }

  function onChangeForRadio(event: ChangeEvent<HTMLInputElement>) {
    modelG.radio = event.target.value;
    render();
  }

  function onChangeForCheckbox(event: ChangeEvent<HTMLInputElement>) {
    modelG.checkbox = event.target.checked ? [...modelG.checkbox, event.target.value] : modelG.checkbox.filter((it) => it !== event.target.value);
    render();
  }

  return (
    <section className="ViewG">
      <Nav/>
      <h1>View G</h1>
      <div>
        <input type="text" value={modelG.text} onChange={onChangeForText} autoFocus={true}/>
        <div>-> '{modelG.text}'</div>
      </div>
      <div>
        <textarea value={modelG.textarea} onChange={onChangeForTextarea}/>
        <div>-> '{modelG.textarea}'</div>
      </div>
      <div>
        <select value={modelG.select} onChange={onChangeForSelect}>
          <option value="Select A">Select A</option>
          <option value="Select B">Select B</option>
          <option value="Select C">Select C</option>
        </select>
        <div>-> '{modelG.select}'</div>
      </div>
      <div>
        <label><input type="radio" value="Radio A" checked={modelG.radio === 'Radio A'} onChange={onChangeForRadio}/>Radio A</label><br/>
        <label><input type="radio" value="Radio B" checked={modelG.radio === 'Radio B'} onChange={onChangeForRadio}/>Radio B</label><br/>
        <label><input type="radio" value="Radio C" checked={modelG.radio === 'Radio C'} onChange={onChangeForRadio}/>Radio C</label><br/>
        <div>-> '{modelG.radio}'</div>
      </div>
      <div>
        <label><input type="checkbox" value="Checkbox A" checked={modelG.checkbox.includes('Checkbox A')} onChange={onChangeForCheckbox}/>Checkbox A</label><br/>
        <label><input type="checkbox" value="Checkbox B" checked={modelG.checkbox.includes('Checkbox B')} onChange={onChangeForCheckbox}/>Checkbox B</label><br/>
        <label><input type="checkbox" value="Checkbox C" checked={modelG.checkbox.includes('Checkbox C')} onChange={onChangeForCheckbox}/>Checkbox C</label><br/>
        <div>-> '{modelG.checkbox.join(', ')}'</div>
      </div>
      <ComponentG model={modelG} onUpdate={render}/>
    </section>
  );
};

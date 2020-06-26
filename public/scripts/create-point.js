/* function Dados(dataUrl, Select) {
  Select.disabled = true;
  Select.innerHTML = "<option value>Selecione a cidade</option>";
  fetch(dataUrl)
    .then((res) => res.json())
    .then((AllObj) => {
      for (const oneObjt of AllObj) {
        Select.innerHTML += `<option value='${oneObjt.id}'>${oneObjt.nome}</option>`;
      }
      Select.disabled = false;
    });
} */

function dataUfs() {
  const UfSelect = document.querySelector("select[name=uf]");
  const UrlUf = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  fetch(UrlUf)
    .then((res) => res.json())
    .then((states) => {
      for ( const state of states) {
        UfSelect.innerHTML += `<option value='${state.id}'>${state.nome}</option>`;
      }
    });
}
dataUfs();

function getCities(event) {
  const citieSelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");
  UF = event.target.value;
  const IndexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[IndexOfSelectedState].text;
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`;

  citieSelect.disabled = true;
  citieSelect.innerHTML = "<option value>Selecione a cidade</option>";
  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (const city of cities) {
        citieSelect.innerHTML += `<option value='${city.nome}'>${city.nome}</option>`;
      }
      citieSelect.disabled = false;
    })
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities);

const toggleHeight = (clickedDiv) => {
  const contentDivs = document.querySelectorAll(".card-width");
  //commented line code is give for understanding
  // Collapse all other cards
  contentDivs.forEach((div) => {
    if (div !== clickedDiv) {
      div.style.height = "74px";
      div.style.borderColor = "#A7A7A740";
      div.style.boxShadow = "0px 0px 4px 0px #A7A7A740";
      div.style.backgroundColor = "white";
      div.innerHTML = `
        <table style="border-spacing: 0px">
          <tr>
            <td class="table-data-1 left-text-1">
              <span class="left-text-2">30% </span><br /><span
                class="left-text-2"
                >off</span
              >
            </td>
            <td>
              <table>
                <tr>
                  <td>
                    <input
                      id="RadioButton"
                      name="RadioButton"
                      value="RadioButton"
                      class="input-class"
                      checked
                      type="radio"
                    />
                  </td>
                  <td class="right-style-1">
                    <span class="right-text-1">Buy 1 Get 1</span> <br />
                    <span class="right-text-2"> $18.00 USD </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `;
    }
  });

  // Toggle the clicked card
  if (clickedDiv.style.height === "172px") {
    clickedDiv.style.height = "74px";
    clickedDiv.style.borderColor = "#A7A7A740";
    clickedDiv.style.boxShadow = "0px 0px 4px 0px #A7A7A740";
    clickedDiv.style.backgroundColor = "white";
    clickedDiv.innerHTML = `
      <table style="border-spacing: 0px">
        <tr>
          <td class="table-data-1 left-text-1">
            <span class="left-text-2">30% </span><br /><span
              class="left-text-2"
              >off</span
            >
          </td>
          <td>
            <table>
              <tr>
                <td>
                  <input
                    id="RadioButton"
                    name="RadioButton"
                    value="RadioButton"
                    class="input-class"
                    checked
                    type="radio"
                  />
                </td>
                <td class="right-style-1">
                  <span class="right-text-1">Buy 1 Get 1</span> <br />
                  <span class="right-text-2"> $18.00 USD </span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
  } else {
    clickedDiv.style.height = "172px";
    clickedDiv.style.borderColor = "#FF6B82";
    clickedDiv.style.boxShadow = "";
    clickedDiv.style.backgroundColor = "#FFF9FA";
    clickedDiv.innerHTML = `
      <div onclick="toggleHeight(this)" class="">
        <table>
          <tr>
            <td> <input class='js-class-radio' checked type="radio" /></td>
            <td class="position-class">
              <span class="offer-text right-text-1">Buy 3 Get 6</span>
              <span class="discount bg-color-text ">10% off</span>
              <br />
              <span class="offer-text right-text-2">$18.00 USD</span>
              <span class="discount "> $10.00 USD</span>
              <br />
              <span class="offer-text">Size</span>
              <span class="discount"> Color</span>
              <br />
              <span><select  class="select-class-1" name="S" id="">  <option>S</option>
</select></span>
              <span><select class="select-class-2" name="" id="">  <option>Black</option>
</select></span>
              <br />
              <span><select class="select-class-3" name="" id="">  <option>S</option>
</select></span>
              <span><select class="select-class-4" name="" id="">  <option>Color</option>
</select></span>
            </td>
          </tr>
        </table>
      </div>
    `;
  }
};

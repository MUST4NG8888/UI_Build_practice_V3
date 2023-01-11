const companies = {
  id: "companies",
  logo: "Annual Reports",
  button: "Visit",
  cards: [
    {
      title: "Apple",
      sub: "AAPL",
      text: "$ 2.690 T",
    },
    {
      title: "Microsoft",
      sub: "MSFT",
      text: "$ 2.228 T",
    },
    {
      title: "Saudi Aramco",
      sub: "2222.SR",
      text: "$ 2.205 T",
    },
    {
      title: "Alphabet (Google)",
      sub: "GOOG",
      text: "$ 1.778 T",
    },
    {
      title: "Amazon",
      sub: "AMZN",
      text: "$ 1.565 T",
    },
    {
      title: "Tesla",
      sub: "TSLA",
      text: "$ 837.00 B",
    },
    {
      title: "Nvidia",
      sub: "NVDA",
      text: "$ 601.99 B",
    },
  ],
};
console.log("halo");
const init = () => {
  const root = document.getElementById("root");

  const nav = document.createElement("nav");

  const logo = document.createElement("h1");
  logo.innerText = companies.logo.toUpperCase();

  const menu = document.createElement("span");
  menu.setAttribute("class", "material-symbols-outlined");
  menu.innerText = "menu";

  nav.append(logo, menu);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");

  root.append(nav)
  root.append(wrapper);

  companies.cards.map((card) => {
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    const box = document.createElement("div");
    box.setAttribute("class", "box");

    const subBox = document.createElement("div")
    box.append(subBox)
    subBox.setAttribute("class", "subbox")

    const stockname = document.createElement("p");
    stockname.setAttribute("class", "stockname");
    stockname.innerText = card.sub;
    subBox.appendChild(stockname);

    const title = document.createElement("p");
    title.setAttribute("class", "title");
    title.innerText = card.title;
    subBox.appendChild(title);

    const div = document.createElement("div");
    div.setAttribute("class", "text-div");
    box.appendChild(div);

    const text = document.createElement("p");
    text.setAttribute("class", "text");
    text.innerText = card.text;
    div.appendChild(text);
    box.appendChild(div);

    const visitContainer = document.createElement("div");
    visitContainer.setAttribute("class", "visit-box");

    const visit = document.createElement("div");
    visit.setAttribute("class", "visit");
    visit.innerText = "Visit";
    visitContainer.appendChild(visit);
    const icon = document.createElement("span");
    icon.setAttribute("class", "material-symbols-outlined");
    icon.innerText = "arrow_forward";

    visitContainer.appendChild(icon);

    container.append(box, visitContainer);

    wrapper.appendChild(container);
  });
};

init();

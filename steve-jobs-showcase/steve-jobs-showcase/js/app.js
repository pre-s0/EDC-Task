const $ = s => document.querySelector(s);
const cite = ids => ids.map(i => `<a class="cite" href="#src-${i}">[${i}]</a>`).join(" ");

// Timeline: built from MILESTONES, each item expands on click.
$("#timeline").innerHTML = MILESTONES.map((m, i) => `
  <li>
    <button class="t-head" aria-expanded="false" aria-controls="t${i}">
      <span class="yr">${m.year}</span><span>${m.title}</span>
    </button>
    <div class="t-body" id="t${i}" hidden><p>${m.text} ${cite(m.src)}</p></div>
  </li>`).join("");
$("#timeline").addEventListener("click", e => {
  const b = e.target.closest(".t-head"); if (!b) return;
  const open = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", !open);
  document.getElementById(b.getAttribute("aria-controls")).hidden = open;
});

// Venture cards with tag filter, built from VENTURES.
let active = "All";
const tags = ["All", ...new Set(VENTURES.flatMap(v => v.tags))];
function renderFilters() {
  $("#filters").innerHTML = tags.map(t =>
    `<button type="button" class="chip" aria-pressed="${t === active}" data-tag="${t}">${t}</button>`).join("");
}
function renderCards() {
  const list = VENTURES.filter(v => active === "All" || v.tags.includes(active));
  $("#cards").innerHTML = list.map(v => `
    <button type="button" class="card" data-name="${v.name}">
      <strong>${v.name}</strong><span>${v.role}</span><em>${v.tags.join(", ")}</em>
    </button>`).join("") || "<p>No ventures match this filter.</p>";
}
$("#filters").addEventListener("click", e => {
  const c = e.target.closest(".chip"); if (!c) return;
  active = c.dataset.tag; renderFilters(); renderCards();
});
const dlg = $("#detail");
$("#cards").addEventListener("click", e => {
  const c = e.target.closest(".card"); if (!c) return;
  const v = VENTURES.find(x => x.name === c.dataset.name);
  $("#dTitle").textContent = v.name; $("#dRole").textContent = v.role;
  $("#dText").innerHTML = `${v.text} ${cite(v.src)}`;
  $("#dLinks").innerHTML = v.links.map(l => `<a href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`).join("<br>");
  dlg.showModal();
});
$("#dClose").onclick = () => dlg.close();
dlg.addEventListener("click", e => { if (e.target === dlg || e.target.closest("a.cite")) dlg.close(); });

// Impact and sources, built from data.
const li = x => `<li>${x.text} ${cite(x.src)}</li>`;
$("#achievements").innerHTML = ACHIEVEMENTS.map(li).join("");
$("#lessons").innerHTML = LESSONS.map(li).join("");
$("#srcList").innerHTML = SOURCES.map(s =>
  `<li id="src-${s.id}" value="${s.id}"><a href="${s.url}" target="_blank" rel="noopener">${s.title}</a></li>`).join("");

// Mobile menu and theme switch.
const menuBtn = $("#menuBtn"), nav = $("#nav");
menuBtn.onclick = () => { const o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); };
nav.addEventListener("click", e => { if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); } });
const root = document.documentElement, themeBtn = $("#themeBtn");
function setTheme(t) { root.dataset.theme = t; themeBtn.textContent = t === "dark" ? "Light mode" : "Dark mode"; try { localStorage.setItem("theme", t); } catch (e) {} }
let saved = null; try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
themeBtn.onclick = () => setTheme(root.dataset.theme === "dark" ? "light" : "dark");

renderFilters(); renderCards();

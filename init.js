import { loadSettings } from "./fragment.js"
import { renderSettings } from "./settings.js"

function loadData(settings) {
    d3.json("data/data.json").then(function(data) {
        renderSettings(settings)
    })
}

export function init() {
    let settings = loadSettings(window.location.hash)
    loadData(settings)
}

/* reimplement code later */

import { DEFAULT_RATE, DEFAULT_RATE_PRECISION, DEFAULT_COUNT_PRECISION, longRateNames } from "./align.js"
import { dropdown } from "./dropdown.js"
import { DEFAULT_TAB, clickTab } from "./events.js"

// There are several things going on with this control flow. Settings should
// work like this:
// 1) Settings are parsed from the URL fragment into the settings Map.
// 2) Each setting's `render` function is called.
// 3) If the setting is not present in the map, a default value is used.
// 4) The setting is applied.
// 5) The setting's GUI is placed into a consistent state.
// Remember to add the setting to fragment.js, too!

function renderTab(settings) {
    
}

// build targets

function renderTargets(settings) {
    
}

// ignore

function renderIgnore(settings) {
    
}

// overclock

function renderOverclock(settings) {
    
}

// display rate

function rateHandler() {
    
}

function renderRateOptions(settings) {
    
}

// precisions

function renderPrecisions(settings) {
    
}

// belt

function beltHandler(belt) {
    
}

function renderBelts(settings) {
    
}

// alternate recipes

function changeAltRecipe(recipe) {
    
}

function renderIngredient(ingSpan) {
    
}

function renderAltRecipes(settings) {
    
}

// miners

function mineHandler(d) {
    
}

function renderResources(settings) {
    
}

export function renderSettings(settings) {
    renderTargets(settings)
    renderIgnore(settings)
    renderOverclock(settings)
    renderRateOptions(settings)
    renderPrecisions(settings)
    renderBelts(settings)
    renderAltRecipes(settings)
    renderResources(settings)
    renderTab(settings)
}

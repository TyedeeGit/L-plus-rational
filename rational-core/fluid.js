import { ItemRate } from "./item.js";

export class FluidRate extends ItemRate {
  constructor(fluid_id, rate) {
    this.fluid_id = fluid_id;
    this.rate = rate;
  };
};

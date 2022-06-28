
class Rational {
  // A rational number
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
  }
};

class CrafterType {
  constructor(inputs, fluid_inputs, outputs, fluid_outputs) {
    // Each arg defines the amount of inputs or outputs
    this.inputs = inputs;
    this.fluid_inputs = fluid_inputs;
    this.outputs = outputs;
    this.fluid_ouputs = fluid_outputs;
  }
};

// Define crafter types
export const crafter_types = {
  crafter_miner: new BuildingType(0, 0, 1, 0),
  crafter_constructor: new BuildingType(1, 0, 1, 0),
  crafter_assembler: new BuildingType(2, 0, 1, 0),
  crafter_manufacturer: new BuildingType(4, 0, 1, 0),
};

// Define max rates
export const conveyor_rates = [60, 120, 270, 480, 780];
export const pipeline_rates = [300, 600];

export class ItemRate {
  constructor(item_id, rate) {
    this.item_id = item_id;
    this.rate = rate;
  }
};

export class FluidRate extends ItemRate {
  constructor(fluid_id, rate) {
    this.fluid_id = fluid_id;
    this.rate = rate;
  }
};

export class Recipe {
  constructor(inputs, fluid_inputs, outputs, fluid_outputs) {
    // Each arg is a list of RecipeItem or RecipeFluid
    this.inputs = inputs;
    this.fluid_inputs = fluid_inputs;
    this.outputs = outputs;
    this.fluid_outputs = fluid_outputs;
  };
};

class Building {
  constructor(building_type, conveyor_inputs, pipeline_inputs, conveyor_outputs, pipeline_outputs) {
    this.building_type = building_type;
    this.conveyor_inputs = conveyor_inputs;
    this.pipeline_inputs = pipeline_inputs;
    this.conveyor_outputs = conveyor_outputs;
    this.pipeline_outputs = pipeline_outputs;
  };
};

export class ConveyorPole extends Building {
  constructor(conveyor_input, conveyor_output) {
    super("building_pole", [conveyor_input], [], [conveyor_output], []);
  };
};

export class Crafter extends Building {
  constructor(building_type, recipe, clock) {
    super(building_type, [], [], [], []);
    this.recipe = recipe;
    this.clock = clock;
  };
  
  trace_conveyor_input_once(input) {
    // Traces conveyor input to the source building
    if (this.conveyor_inputs.length !== 0)
      return undefined;
    return this.conveyor_inputs[input-1].input.input_building;
  };
  
  trace_conveyor_output_once(output) {
    // Traces conveyor output to the destination building
    if (this.conveyor_outputs.length !== 0)
      return undefined;
    return this.conveyor_outputs[output-1].output.output_building;
  };
};

class Port {
  constructor(input, output) {
    this.input = input;
    this.output = output;
  };
};

export class Conveyor {
  constructor(mk, input_building, output_building) {
    this.max_rate = conveyor_rates[mk-1];
    this.attach_input(input_building);
    this.attach_output(output_building);
  };
  
  attach_input(building) {
    building.conveyor_outputs.push(new Port(building, this));
    this.input_building = building;
  };
  
  attach_output(building) {
    building.conveyor_inputs.push(new Port(this, building));
    this.output_building = building;
  };
};

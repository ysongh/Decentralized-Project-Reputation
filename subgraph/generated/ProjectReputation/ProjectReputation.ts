// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class rated extends ethereum.Event {
  get params(): rated__Params {
    return new rated__Params(this);
  }
}

export class rated__Params {
  _event: rated;

  constructor(event: rated) {
    this._event = event;
  }

  get projectId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get num(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ProjectReputation__getProjectsResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get contractAddress(): Address {
    return this[1].toAddress();
  }

  get ratings(): Array<BigInt> {
    return this[2].toBigIntArray();
  }

  get voters(): Array<Address> {
    return this[3].toAddressArray();
  }

  get owner(): Address {
    return this[4].toAddress();
  }
}

export class ProjectReputation__projectsResult {
  value0: BigInt;
  value1: Address;
  value2: Address;

  constructor(value0: BigInt, value1: Address, value2: Address) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getContractAddress(): Address {
    return this.value1;
  }

  getOwner(): Address {
    return this.value2;
  }
}

export class ProjectReputation extends ethereum.SmartContract {
  static bind(address: Address): ProjectReputation {
    return new ProjectReputation("ProjectReputation", address);
  }

  getProjects(): Array<ProjectReputation__getProjectsResultValue0Struct> {
    let result = super.call(
      "getProjects",
      "getProjects():((uint256,address,uint256[],address[],address)[])",
      []
    );

    return result[0].toTupleArray<
      ProjectReputation__getProjectsResultValue0Struct
    >();
  }

  try_getProjects(): ethereum.CallResult<
    Array<ProjectReputation__getProjectsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getProjects",
      "getProjects():((uint256,address,uint256[],address[],address)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<ProjectReputation__getProjectsResultValue0Struct>()
    );
  }

  getRatingsByProject(id: BigInt): Array<BigInt> {
    let result = super.call(
      "getRatingsByProject",
      "getRatingsByProject(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toBigIntArray();
  }

  try_getRatingsByProject(id: BigInt): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getRatingsByProject",
      "getRatingsByProject(uint256):(uint256[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getVotersByProject(id: BigInt): Array<Address> {
    let result = super.call(
      "getVotersByProject",
      "getVotersByProject(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return result[0].toAddressArray();
  }

  try_getVotersByProject(id: BigInt): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getVotersByProject",
      "getVotersByProject(uint256):(address[])",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  projectCount(): BigInt {
    let result = super.call("projectCount", "projectCount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_projectCount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("projectCount", "projectCount():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  projects(param0: BigInt): ProjectReputation__projectsResult {
    let result = super.call(
      "projects",
      "projects(uint256):(uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new ProjectReputation__projectsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toAddress()
    );
  }

  try_projects(
    param0: BigInt
  ): ethereum.CallResult<ProjectReputation__projectsResult> {
    let result = super.tryCall(
      "projects",
      "projects(uint256):(uint256,address,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ProjectReputation__projectsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toAddress()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddProjectCall extends ethereum.Call {
  get inputs(): AddProjectCall__Inputs {
    return new AddProjectCall__Inputs(this);
  }

  get outputs(): AddProjectCall__Outputs {
    return new AddProjectCall__Outputs(this);
  }
}

export class AddProjectCall__Inputs {
  _call: AddProjectCall;

  constructor(call: AddProjectCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddProjectCall__Outputs {
  _call: AddProjectCall;

  constructor(call: AddProjectCall) {
    this._call = call;
  }
}

export class RateAProjectCall extends ethereum.Call {
  get inputs(): RateAProjectCall__Inputs {
    return new RateAProjectCall__Inputs(this);
  }

  get outputs(): RateAProjectCall__Outputs {
    return new RateAProjectCall__Outputs(this);
  }
}

export class RateAProjectCall__Inputs {
  _call: RateAProjectCall;

  constructor(call: RateAProjectCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get num(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RateAProjectCall__Outputs {
  _call: RateAProjectCall;

  constructor(call: RateAProjectCall) {
    this._call = call;
  }
}
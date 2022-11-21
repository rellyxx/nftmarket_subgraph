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

export class MarketItemCreated extends ethereum.Event {
  get params(): MarketItemCreated__Params {
    return new MarketItemCreated__Params(this);
  }
}

export class MarketItemCreated__Params {
  _event: MarketItemCreated;

  constructor(event: MarketItemCreated) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get state(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class MarketItemSold extends ethereum.Event {
  get params(): MarketItemSold__Params {
    return new MarketItemSold__Params(this);
  }
}

export class MarketItemSold__Params {
  _event: MarketItemSold;

  constructor(event: MarketItemSold) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get nftContract(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get seller(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get state(): i32 {
    return this._event.parameters[6].value.toI32();
  }
}

export class NFTMarketplace__fetchActiveItemsResultValue0Struct extends ethereum.Tuple {
  get index(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get buyer(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get state(): i32 {
    return this[6].toI32();
  }
}

export class NFTMarketplace__fetchMyCreatedItemsResultValue0Struct extends ethereum.Tuple {
  get index(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get buyer(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get state(): i32 {
    return this[6].toI32();
  }
}

export class NFTMarketplace__fetchMyPurchasedItemsResultValue0Struct extends ethereum.Tuple {
  get index(): BigInt {
    return this[0].toBigInt();
  }

  get nftContract(): Address {
    return this[1].toAddress();
  }

  get tokenId(): BigInt {
    return this[2].toBigInt();
  }

  get seller(): Address {
    return this[3].toAddress();
  }

  get buyer(): Address {
    return this[4].toAddress();
  }

  get price(): BigInt {
    return this[5].toBigInt();
  }

  get state(): i32 {
    return this[6].toI32();
  }
}

export class NFTMarketplace extends ethereum.SmartContract {
  static bind(address: Address): NFTMarketplace {
    return new NFTMarketplace("NFTMarketplace", address);
  }

  admin(): Address {
    let result = super.call("admin", "admin():(address)", []);

    return result[0].toAddress();
  }

  try_admin(): ethereum.CallResult<Address> {
    let result = super.tryCall("admin", "admin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  fetchActiveItems(): Array<
    NFTMarketplace__fetchActiveItemsResultValue0Struct
  > {
    let result = super.call(
      "fetchActiveItems",
      "fetchActiveItems():((uint256,address,uint256,address,address,uint256,uint8)[])",
      []
    );

    return result[0].toTupleArray<
      NFTMarketplace__fetchActiveItemsResultValue0Struct
    >();
  }

  try_fetchActiveItems(): ethereum.CallResult<
    Array<NFTMarketplace__fetchActiveItemsResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchActiveItems",
      "fetchActiveItems():((uint256,address,uint256,address,address,uint256,uint8)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        NFTMarketplace__fetchActiveItemsResultValue0Struct
      >()
    );
  }

  fetchMyCreatedItems(): Array<
    NFTMarketplace__fetchMyCreatedItemsResultValue0Struct
  > {
    let result = super.call(
      "fetchMyCreatedItems",
      "fetchMyCreatedItems():((uint256,address,uint256,address,address,uint256,uint8)[])",
      []
    );

    return result[0].toTupleArray<
      NFTMarketplace__fetchMyCreatedItemsResultValue0Struct
    >();
  }

  try_fetchMyCreatedItems(): ethereum.CallResult<
    Array<NFTMarketplace__fetchMyCreatedItemsResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchMyCreatedItems",
      "fetchMyCreatedItems():((uint256,address,uint256,address,address,uint256,uint8)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        NFTMarketplace__fetchMyCreatedItemsResultValue0Struct
      >()
    );
  }

  fetchMyPurchasedItems(): Array<
    NFTMarketplace__fetchMyPurchasedItemsResultValue0Struct
  > {
    let result = super.call(
      "fetchMyPurchasedItems",
      "fetchMyPurchasedItems():((uint256,address,uint256,address,address,uint256,uint8)[])",
      []
    );

    return result[0].toTupleArray<
      NFTMarketplace__fetchMyPurchasedItemsResultValue0Struct
    >();
  }

  try_fetchMyPurchasedItems(): ethereum.CallResult<
    Array<NFTMarketplace__fetchMyPurchasedItemsResultValue0Struct>
  > {
    let result = super.tryCall(
      "fetchMyPurchasedItems",
      "fetchMyPurchasedItems():((uint256,address,uint256,address,address,uint256,uint8)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<
        NFTMarketplace__fetchMyPurchasedItemsResultValue0Struct
      >()
    );
  }

  getListingFee(): BigInt {
    let result = super.call("getListingFee", "getListingFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getListingFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getListingFee",
      "getListingFee():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  implementation(): Address {
    let result = super.call("implementation", "implementation():(address)", []);

    return result[0].toAddress();
  }

  try_implementation(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "implementation",
      "implementation():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  listingFee(): BigInt {
    let result = super.call("listingFee", "listingFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_listingFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("listingFee", "listingFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  marketowner(): Address {
    let result = super.call("marketowner", "marketowner():(address)", []);

    return result[0].toAddress();
  }

  try_marketowner(): ethereum.CallResult<Address> {
    let result = super.tryCall("marketowner", "marketowner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class CreateMarketItemCall extends ethereum.Call {
  get inputs(): CreateMarketItemCall__Inputs {
    return new CreateMarketItemCall__Inputs(this);
  }

  get outputs(): CreateMarketItemCall__Outputs {
    return new CreateMarketItemCall__Outputs(this);
  }
}

export class CreateMarketItemCall__Inputs {
  _call: CreateMarketItemCall;

  constructor(call: CreateMarketItemCall) {
    this._call = call;
  }

  get nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateMarketItemCall__Outputs {
  _call: CreateMarketItemCall;

  constructor(call: CreateMarketItemCall) {
    this._call = call;
  }
}

export class CreateMarketSaleCall extends ethereum.Call {
  get inputs(): CreateMarketSaleCall__Inputs {
    return new CreateMarketSaleCall__Inputs(this);
  }

  get outputs(): CreateMarketSaleCall__Outputs {
    return new CreateMarketSaleCall__Outputs(this);
  }
}

export class CreateMarketSaleCall__Inputs {
  _call: CreateMarketSaleCall;

  constructor(call: CreateMarketSaleCall) {
    this._call = call;
  }

  get nftContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get index(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CreateMarketSaleCall__Outputs {
  _call: CreateMarketSaleCall;

  constructor(call: CreateMarketSaleCall) {
    this._call = call;
  }
}

export class DeleteMarketItemCall extends ethereum.Call {
  get inputs(): DeleteMarketItemCall__Inputs {
    return new DeleteMarketItemCall__Inputs(this);
  }

  get outputs(): DeleteMarketItemCall__Outputs {
    return new DeleteMarketItemCall__Outputs(this);
  }
}

export class DeleteMarketItemCall__Inputs {
  _call: DeleteMarketItemCall;

  constructor(call: DeleteMarketItemCall) {
    this._call = call;
  }

  get itemId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteMarketItemCall__Outputs {
  _call: DeleteMarketItemCall;

  constructor(call: DeleteMarketItemCall) {
    this._call = call;
  }
}

export class UpgradeCall extends ethereum.Call {
  get inputs(): UpgradeCall__Inputs {
    return new UpgradeCall__Inputs(this);
  }

  get outputs(): UpgradeCall__Outputs {
    return new UpgradeCall__Outputs(this);
  }
}

export class UpgradeCall__Inputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }

  get newImplementation(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class UpgradeCall__Outputs {
  _call: UpgradeCall;

  constructor(call: UpgradeCall) {
    this._call = call;
  }
}
import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  MarketItemCreated,
  MarketItemSold
} from "../generated/NFTMarketplace/NFTMarketplace"

export function createMarketItemCreatedEvent(
  index: BigInt,
  nftContract: Address,
  tokenId: BigInt,
  seller: Address,
  buyer: Address,
  price: BigInt,
  state: i32
): MarketItemCreated {
  let marketItemCreatedEvent = changetype<MarketItemCreated>(newMockEvent())

  marketItemCreatedEvent.parameters = new Array()

  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftContract",
      ethereum.Value.fromAddress(nftContract)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  marketItemCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(state))
    )
  )

  return marketItemCreatedEvent
}

export function createMarketItemSoldEvent(
  index: BigInt,
  nftContract: Address,
  tokenId: BigInt,
  seller: Address,
  buyer: Address,
  price: BigInt,
  state: i32
): MarketItemSold {
  let marketItemSoldEvent = changetype<MarketItemSold>(newMockEvent())

  marketItemSoldEvent.parameters = new Array()

  marketItemSoldEvent.parameters.push(
    new ethereum.EventParam("index", ethereum.Value.fromUnsignedBigInt(index))
  )
  marketItemSoldEvent.parameters.push(
    new ethereum.EventParam(
      "nftContract",
      ethereum.Value.fromAddress(nftContract)
    )
  )
  marketItemSoldEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  marketItemSoldEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  marketItemSoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  marketItemSoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  marketItemSoldEvent.parameters.push(
    new ethereum.EventParam(
      "state",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(state))
    )
  )

  return marketItemSoldEvent
}

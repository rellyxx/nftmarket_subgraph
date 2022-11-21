import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address } from "@graphprotocol/graph-ts"
import { MarketItemCreated } from "../generated/schema"
import { MarketItemCreated as MarketItemCreatedEvent } from "../generated/NFTMarketplace/NFTMarketplace"
import { handleMarketItemCreated } from "../src/nft-marketplace"
import { createMarketItemCreatedEvent } from "./nft-marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let index = BigInt.fromI32(234)
    let nftContract = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let tokenId = BigInt.fromI32(234)
    let seller = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let buyer = Address.fromString("0x0000000000000000000000000000000000000001")
    let price = BigInt.fromI32(234)
    let state = 123
    let newMarketItemCreatedEvent = createMarketItemCreatedEvent(
      index,
      nftContract,
      tokenId,
      seller,
      buyer,
      price,
      state
    )
    handleMarketItemCreated(newMarketItemCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MarketItemCreated created and stored", () => {
    assert.entityCount("MarketItemCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MarketItemCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "index",
      "234"
    )
    assert.fieldEquals(
      "MarketItemCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftContract",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MarketItemCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "tokenId",
      "234"
    )
    assert.fieldEquals(
      "MarketItemCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "seller",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MarketItemCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MarketItemCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "price",
      "234"
    )
    assert.fieldEquals(
      "MarketItemCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "state",
      "123"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})

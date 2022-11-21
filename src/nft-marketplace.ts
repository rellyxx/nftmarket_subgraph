import {
  MarketItemCreated as MarketItemCreatedEvent,
  MarketItemSold as MarketItemSoldEvent
} from "../generated/NFTMarketplace/NFTMarketplace"
import { MarketItemCreated, MarketItemSold } from "../generated/schema"

export function handleMarketItemCreated(event: MarketItemCreatedEvent): void {
  let entity = new MarketItemCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.index = event.params.index
  entity.nftContract = event.params.nftContract
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.price = event.params.price
  entity.state = event.params.state

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketItemSold(event: MarketItemSoldEvent): void {
  let entity = new MarketItemSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.index = event.params.index
  entity.nftContract = event.params.nftContract
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.price = event.params.price
  entity.state = event.params.state

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

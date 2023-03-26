import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import { rated } from "../generated/ProjectReputation/ProjectReputation"

export function createratedEvent(
  projectId: BigInt,
  num: BigInt,
  from: Address
): rated {
  let ratedEvent = changetype<rated>(newMockEvent())

  ratedEvent.parameters = new Array()

  ratedEvent.parameters.push(
    new ethereum.EventParam(
      "projectId",
      ethereum.Value.fromUnsignedBigInt(projectId)
    )
  )
  ratedEvent.parameters.push(
    new ethereum.EventParam("num", ethereum.Value.fromUnsignedBigInt(num))
  )
  ratedEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )

  return ratedEvent
}

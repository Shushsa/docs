---
id: ecosystem
title: Kira's Ecosystem
sidebar_label: Kira's Ecosystem
---

## Q1: What are the various roles in the Kira ecosystem?

1. User - is a person who owns whitelisted fee tokens, such as BTC, ETH, KEX, etc, and interacts with the Kira exchange.
2. Delegator - is a user who owns stakeable assets and bonds them to validators in order to help secure the network.
3. Validator - is a Kira Hub operator to whom stakeable assets are bonded. Validators participate in consensus and propose new blocks, and in return, they collect commission fees and other rewards such as exchange fees. This cash-flow enables validators to sustain operations and keep the network secure.
4. Counselor - is a user who participates in the process of governance but does not operate a validator node.
5. Hunter - is a node operator who vets computations occurring across exchange zones and guards the network against malicious cartels and other undesirable on-chain activity. Hunters report any state inconsistencies they discover, and are rewarded with a share of the fines subsequently imposed on misbehaving validators by the protocol.

## Q2: How will delegators make money?

Delegators are incentivized by block, network fee, and exchange fee rewards. Block rewards are proportional to stake bonded (globally) while the network and exchange fee rewards are proportional to the stake bonded to each individual validator. Delegators are eligible to earn up to 50% of all exchange fees, while the remaining half is credited to validators. Delegators can bond any assets that are whitelisted as being stakeable, and earn revenue from the exchange, even if they do no own any KEX tokens.

## Q3: How will validators make money?

Validators earn commissions on block rewards received by delegators. Commission
fees for block rewards are defined individually by each validator, in range of 0% to 100%, with 
the likely average being around 10% (based on the values observed in production PoS networks).
Furthermore, each validator is eligible for 50% of all exchange and network fees from each block
proposed. Validators can also be delegators and self-bond their profits to generate compound 
returns. Kira Hub validators with the highest uptime and bonded stake can be
elected as exchange zone validators, which allows them to earn even greater revenues. 
In the event that exchange zones fail to generate sufficient network and exchange fee
rewards to cover running costs, validators can be further incentivized through the community pool 
and on-chain contacting system to ensure that the exchange remains operational under all market conditions.

## Q4: How do counselors make money?

Counselors are permitted to vest a small (governance defined) percentage of their total KEX tokens, and earn 
revenue from block rewards at a ratio no greater than the prevailing inflation rate. These vested tokens 
are not subject to slashing, but they are also not exchangeable for the transferable 'token shares' that 
delegators receive when they stake assets. 

Counselors require incentives to remain active participants in governance, and the ability to vest their 
(already staked) tokens offers them a small salary in proportion to the number of tokens they choose to lock. 
It also slightly decreases the available supply of KEX and helps generate upward price pressure for the asset.

The above is enforced via a Code of Conduct that explicitly excludes centralized exchanges and prohibits 
the 'pooling' of assets in order to game this mechanism.

## Q5: Does having a large validator set decrease the speed of the network?

No, because Kira employs a hub-and-spoke architecture. In order to ensure the safety of all assets in the network, 
the settlement layer (the hub) requires a large validator set. However, trades do not occur on the Kira Hub, 
rather they occur on exchange zones (the spokes) which have smaller validator sets for high-throughput.

## Q6: How do the tokenomics operate at the zone level? Must all zone validators also be hub validators?

Yes, all zone validators must also be hub validators, and have bonded stake in play, otherwise, 
they wouldn't be slashable for any infractions they commit. To be precise, zone validators participate 
in 'Bonded Proof of Authority' consensus. Becoming a zone validator is a privilege, and only the most 
reputable hub validators, with the highest uptime and largest bonded stake, are likely to be elevated 
to zone validator status. Zone validators earn half of the exchange fee rewards on the zones they 
operate, and this revenue is likely to be shared amongst a very small validator set, so validators 
will complete fiercely for the governance assigned right to validate on the most lucrative zones. 

Exchanges are like supermarkets; you go there because you know they're likely to have everything you need, 
even if you usually only buy a few products. Customers who visit with the intention of buying a specific 
item often end up buying much more than they anticipated, so it's worthwhile for supermarkets to stock many 
'long-tail' products that only few people purchase, because it boosts overall sales. For this reason, 
if a zone is new or in an early bootstrapping phase (e.g. not currently generating enough revenue 
from fees to sustain operations) zone validators can request a 'basic income' via the on-chain 
contracting system (on the Kira Hub) to act as a bridge to future economic sustainability.

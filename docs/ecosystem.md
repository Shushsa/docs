---
id: ecosystem
title: Kira's Ecosystem
sidebar_label: Kira's Ecosystem
---

## Q1: What are the various roles in Kira ecosystem?

1. User - is a person who owns whitelisted fee tokens, such as BTC, ETH, KEX, etc, and interacts with the Kira exchange.
2. Delegator - is a user who owns stakeable assets and bonds them to validators in order to help secure the network.
3. Validator - is a Kira Hub operator to whom stakeable assets are bonded. Validators participate in consensus and propose new blocks, and in return, they collect commission fees and other rewards such as exchange fees. This cash-flow enables validators to sustain operations and keep the network secure.
4. Counselor - is a user who participates in the process of governance but does not operate a validator node.
5. Hunter - is a node operator who vets computations occurring across exchange zones and reports inconsistencies, thus guarding the network against malicious cartels and other undesirable on-chain activity.

## Q2: How will delegators make money?

Delegators are incentivized by block rewards, network fee rewards, and exchange fee rewards. Block rewards are proportional to the stake bond (globally) while the network fee rewards and exchange fee rewards are proportional to the stake bond to each particular validator. The delegators are eligible to earn up to 50% of all exchange fees, while the remaining 50% is credited to validators. Delegators can bond any assets that are whitelisted as stake-able and earn revenue from the exchange even if they do no own KEX token.

## Q3: How will validators make money?

Validators earn commission fees from block rewards that delegators receive. Commission
fees for block rewards are defined individually by each validator, in range of 0% to 100%, presumably ~%10 as seen on most DPoS.
Furthermore, each validator is eligible to 50% of all exchange and network fees from each block
proposed. Validators could also be delegators and self-bond the profits they generate to gain
compound interest. Kira Hub validators with the highest uptime and stake bonded can be
elected as the exchange zone validators, which allows them to earn even greater revenues. In
the case where the exchange zone will not be generating enough network and exchange fee
rewards, validators can be incentivized through the community pool and on-chain contacting
system to ensure that the exchange is operational under all possible market conditions.

## Q4: How do counselors make money?

Counselors are incentivized by being able to lock their KEX tokens and earn revenue
from block rewards at a ratio no greater than the inflation rate, while their locked assets cannot be
slashed. The tokens that counselors lock are not transferable in form of shares compared to
tokens that the delegators stake. Counselors cannot lock more than x% (defined by
governance) of the tokens they have.

Counselors need incentives to be involved, one of the ways is allowing them to vest their already staked tokens and receive some small salary in proportion to the amount of those tokens staked thus slightly decreasing the available supply and crating positive price pressure for KEX.

We can enforce it thanks to the code of conduct that will exclude centralized exchanges and other entities from gov that allow "pooling" to make more revenue of this mechanism.

## Q5: Does having a large validator set decrease the speed of the network?

No, due to the Hub-spoke architecture. The settlement layer (Kira Hub) requires a large
number of validators to ensure the security of all assets in the network. Trades do not occur on the Kira Hub, they occur on the exchange zones with smaller validator sets which ensure high
throughput.

## Q6: What is the tokenomics model at the zone level? Do zone validators must also be hub validators?

Yes, you have to be a hub validator and have associated stake there, otherwise, you would not be slashable. To be precise, zone validators participate in the 'bonded' Proof of Authority consensus. Becoming a Zone validator is a privilege, only the best, most trusted hub validators with the
highest uptime and largest stake associated will become zone validators. Zone validators will be
earning 50% of the exchange fee rewards from each proposed block on the zone where they
operate (among a very small validator set). 
Exchange is like a supermarket you go there because everything is there even if you usually
buy only a few products. Clients go to buy X but end up buying way more than they anticipated +
always return because do not even have to think if X is there or not. Sometimes it's worth to
have products no one buys because it's boosting your overall sales. For this reason, even if the
zone is new and bootstrapping (or not generating enough revenue from fees to sustain validator
operations for any other reasons), zone validators can request a minimum salary through
the on-chain contracting system (on the Kira Hub) to guarantee economical sustainability.

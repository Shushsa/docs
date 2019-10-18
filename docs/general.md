---
id: general
title: General
sidebar_label: General
---

## Q1: Will I be able to trade using my hardware wallet?

Yes, Kira will be compatible with a range of hardware wallets, beginning with the Ledger Nano S/X.

## Q2: What makes Kira a 'hybrid' exchange?

Our architecture employs a hybrid of two quite different consensuses mechanisms; Multi Bonded Proof of Stake and Multi Bonded Proof 
of Authority. The former guarantees the security of the settlement layer and the latter provides extremely high transaction 
throughput across our exchange zones

## Q3: What makes you an 'interchain' exchange?

We will comply with Cosmos' Inter-Blockchain Communication (IBC) standard and the Interchain Message 
Passing Protocol specified by Polkadot, as well as other foundational standards that might emerge in the future.

## Q4: Will Kira have the native token, if yes, how will it be used?

Kira has a native stake-able asset called Kira Exchange Token (KEX) which is used to
secure the network, and yields the revenues for the stakeholders in the form of block rewards,
network and exchange fees as well as it’s used as incentivization tool for the onchain
contracting in the community fund. KEX will also be used in the permissionless token issuance
mechanism.

## Q5: How KEX token will be created, if there is no pre-mine?

All KEX tokens will be created through the direct or indirect process of mining. The direct
process involves operating a validator node, during the testnet and incubation phase of the Kira
Network launch. The indirect method of mining will be disclosed at a later date and will be fully
permissionless. During the mining phase, KEX tokens will be created through the dynamic
inflation process, which is required to ensure the security of the network.

## Q6: Will the Kira team receive or reserve any tokens for themselves?

Yes, Kira team will reserve 20% of the tokens to ensure rapid, continuous development
effort.

## Q7: Why bonding is needed?

Bonding is needed to ensure “value” is at stake of the Proof of Stake consensus. When
assets are “at stake” it means that if the validator to whom the stake is bonded misbehaves,
those bonded assets can be destroyed. This ensures that delegators (those who bond stake)
wisely choose validators to who commit their assets.

## Q8: Why do you need to bond multiple tokens and why they have to be whitelisted?

In the context of the Multi-Bonded Proof of Stake consensus, multiple tokens are used to
ensure security and long term decentralization of the network. Every token always centralizes
overtime, for these reasons instead of using a single token, Kira uses many tokens that are
constantly changing to ensure that stake in the network is never centralized to the point which
could decrease the security of the network.

Tokens used for staking have to be whitelisted because the value of the stake has to be pegged
to the value of the native stake-able token KEX, as well as defining the maximum revenue share
that not native staked assets can access. Otherwise, a malicious actor could print and inject an
infinite amount of token within Kira to claim most of the revenue from staking.

## Q9: How does parallelization occur?

Parallelization is achieved when trading occurs in many different zones at the same time. You can pick any zone you want for trading and different currency pairs can be traded on different zones allowing for user experience comparable to one on a centralized exchange, but where user still maintains custody over the funds.

## Q10: How will you as a team make money?

Kira Team can be incentivized through the governance controlled on-chain contracting.
The network will have full custody over the community fund and be able to support Kira
Team to continue development efforts. Additionally Kira team will operate a validator node and
self-bond Kira Tokens to earn block rewards.

## Q11: How will the exchange users make money?

Users, who are not validators and do not own the Kira Exchange Token (KEX) can bond
all other stake-able assets and earn revenue from the block rewards, network fees, and
exchange fees. Staked assets will be transferable in the form of delegation shares, which implies
that users can generate passive income while trading or simply holding their assets.

## Q12: Will there be a market need for such exchange so early in the Cosmos ecosystem ?

Cosmos is a tool used to launch Kira in a fast and painless manner, with the assumption that
crypto is moving toward the Internet of Blockchain. This implies not only trustless bridges to largest
chains like BTC and ETH but also all new projects will be launching using various SDK's and
creating reusable modules instead of forking some legacy coin code and continuously rewriting
and the bug-fixing entire thing. In case of Cosmos BTC and ETH bridges are almost complete and
will be out EOY 2019 along IBC.

Previous paradigms occurred first on various forks of PoW, then on the smart contact level. The
new trend is Proof of Stake consensus and Internet of Blockchains, and this makes total sense
from the perspective of developers who want to rapidly deliver blockchain apps that actually
work and scale in real life scenarios. Which implies that in not so distant future, majority of
tokens will be available or created within the IoB. Kira will allow for all those assets to trade in a
fully trustless and permissionless manner.

It’s extremely important that PoS tokens have a trustless and permissionless access to the
market, due to how the PoS consensus is secured - through the assumption that stake-able
assets have value. If this value could NOT be possible to realize because centralized exchange
began to delist PoS tokens, the PoS security of all those delisted tokens would be immensely
decreased. For this reason, Kira is an essential part of sustaining the Proof of Stake paradigm.

## Q13: So if a transaction is happening on Cosmos Zone for an asset originating from Kira, how will this process work?

Before any asset can be traded on the Kira Exchange it has to be sent through the IBC
protocol into the Kira Hub, from where it can be sent into the exchange zone where trades will
occur. From the user perspective, this process is fully abstracted.

## Q14: When it comes to development of product there's a reason why people want to see competent teams having lots of funds for development purposes, with community fund in place you make sure that it is always possible to bring other developers into play through vote but when it comes to implementing big features that requires lots of time, and not everyone will be able to understand the benefit of them. What makes you think you will be able to persuade people to vote for that feature to get funding over stuff like fancy explorers and other minor improvements that only bring “aesthetics to the platform”, because more often than not people are focused on short term benefits?

Kira’s development team will also be employed under this onchain contract and initially
will be responsible for the majority of those bigger features. While the smaller ones will be
outsourced through the community fund as well. In addition, there’s going to be a code of
conduct under which all governance bodies vote and decide how funds are distributed. You
have to consider, that before the network fully transforms into enlightened democracy, where
people are “chain conscious” and aware of issues like these, the network will be a technocracy,
which implies that people with short term visions will unlikely enter a governance set

## Q15: So all validators no matter how many tokens are staked will have equal voting power but rewards from exchange fees and block rewards gonna be proportional to staked tokens, correct?

Yes, except for the fees. The 50% of the fees goes to the validator that proposes the
block and the rest goes to delegators but the funds that go to the delegators are distributed
differently than block rewards. They are not proportional to your stake in regards to all coins
staked. Your fee rewards are proportional to your stake bonded to the particular validator which
is the similar way how it’s done in polkadot, it’s just a mix of both polkadot distribution (of fee
rewards) and cosmos distribution (of block rewards).

## Q16: Why do validators only get 50% of the exchange fees when they provide most of the leg work?

Kira believes that both delegators and validators have equally important roles. The
delegators provide security and have to be incentivized, while validators operate the network for
everyone to use. These roles are distinct, and are equally valuable. That's why we set that initial
cosmological constant to be 50%.
Governance set will always be able to decide upon any parameter, however, that’s why we have
a code of conduct to ensure that things like that are not abused. It’s similar in case of cosmos
network. If governance decides to change any variable, they could easily do it. It’s a default
setting, however, the assumption is that this ratio would rather decrease than grow. There has to be
a reasonable value under which the network starts operating. Such as supply of tokens, inflation,
and hundreds of other parameters you set in the beginning. Although no one can guess how
the market is going to react, it will definitely show us its expectations.

## Q17: Will voting power be proportional to balance? Meaning, 1 wallet with 1 KEX will have exact same voting power as 1 wallet with 1 million KEX?

There are two cases where voting power applies, that is the governance and chances to
propose new blocks by each validator. In both cases, Kira, validators and council members have
an equal voting power, regardless of the stake bonded. Kira is a technocracy, aiming to evolve
into the enlightened democracy governance system. 
This means that voting power is in the hands of people who have knowledge and skills, useful for the project - rather than those who
only have wealth. Enlightened democracy is the case where the majority of actors become network
conscious to the similar level as initial governance set but that’s a long term process of
educating the user base.

## Q18: So what prevents me from creating thousands of wallets with minimum balance with only one purpose to reject every proposal when its only address that counts as vote Users (stacke-able asset holders) are not automatically part of the governance set?

They have to be elected in accordance with the Code of Conduct, which they also have to follow once they are elected.

## Q19: So the proposals can be made by anyone that have enough whitelisted fee assets to pay the transaction fee. The governance is what approves the submission, and votes can only be made by validators, which have equal voting power among them?

Yes, anyone can propose but the governance set is not just validators, it also consists of the council members, who are not validators but can vote on proposals.

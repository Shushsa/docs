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
Passing Protocol specified by Polkadot, as well as other core standards that might emerge in the future.

## Q4: Will Kira have the native token, if yes, what role does it play?

Kira's native staking asset is called the Kira Exchange Token (KEX). KEX is used to
secure the network and delegating KEX yields block rewards, network fees and exchange fees 
for stakeholders. KEX also powers the on-chain contracting mechanism via the community fund and 
is used in the permissionless token issuance process.

## Q5: If there is no pre-mine, how are KEX tokens created?

All KEX tokens are created either directly, or indirectly, through mining. The direct
mining process involves operating a validator node during the testnet and incubation phase of the Kira
network launch. The indirect method of mining will be disclosed at a later date and also will be fully
permissionless. During the mining phase, KEX tokens will be created through a dynamic
inflation process, which is required to ensure the security of the network.

## Q6: Will the Kira team receive or reserve any tokens for themselves?

Yes, Kira team will reserve 20% of the KEX tokens.

## Q7: Why is bonding needed?

Bonding is required to ensure 'skin in the game' for our Proof of Stake consensus. When
assets are 'at stake' it means that, if a validator to whom the stake is bonded misbehaves,
some of those bonded assets can be slashed (e.g. destroyed). This incentivises delegators (the 
users who bond stake) to consider carefully which validators they commit their tokens to.

## Q8: Why do you need to bond multiple tokens and why they have to be whitelisted?

In the context of Kira's Multi-Bonded Proof of Stake consensus, multiple staking tokens are employed
to promote the long term security and decentralization of the network. All PoS tokens have a 
tenancy to accumulate into the hands of fewer and fewer network participants which, over time, 
has the potential to result in cartel-like behavior. For this reason, Kira employs a diverse set of 
stakeable assets, which are continually rotated in and out of our whitelisted asset pool, thus keeping 
the risk of centralization in check. 

Tokens allowed into our staking pool must always be whitelisted, because the value of the resulting 
assets must be priced using our native staking token (KEX) and the maximum share of rewards share that each 
'non-native' staking asset can earn must be carefully defined. Otherwise, a malicious actor could 
print and inject large numbers of worthless tokens in order to claim an outsized share of 
staking revenues.

## Q9: How does Kira scale transaction throughput?

 Kira employs a hub-spoke architecture such that each order book can potentially be served by a 
 dedicated Tendermint blockchain. Furthermore, each of these shards employs a very small, but highly 
 trusted, validator set that is elected by governance; it is this approach, called Multi-Bonded Proof of 
 Authority (MBPoA) that enables Kira to deliver transaction speed competitive with centralized exchanges.

## Q10: How will you, as a team, make money?

The Kira Team is primary incentivized by a process called on-chain contracting, which is controlled via 
governance. The network will have full custody over a community fund that will finance the Kira
Team throughout its continued development efforts. Additionally, the team will operate a validator 
node, and self-bond Kira Tokens, in order to earn block rewards.

## Q11: How will exchange users make money?

Users who are not validators and do not own the Kira Exchange Token (KEX) can bond
any other stakeable asset and earn a corresponding share of block rewards, network fees, and
exchange fees. Because staked assets are transferable in the form of delegation shares,
users can generate passive income whilst trading, or simply holding, their assets.

## Q12: Will there be a need for an exchange such as Kira so early in the evolution of the Cosmos ecosystem?

We believe in a multi-chain future consisting of rich and diverse universe of interconnected blockchains. 
This vision implies not only the emergence of trustless bridges to the largest ecosystems (such as Bitcoin and Ethereum) but 
also the emergence of thousands of new projects, developed using a range of SDKs, and built using reusable modules rather than 
by adapting legacy and monolithic codebases. In case of Cosmos, Bitcoin and Ethereum bridges are almost complete and 
will be released toward the end of 2019, along with the IBC protocol.

Looking back at the development of the blockchain ecosystem, the first round of innovation came about via multiple
forks Bitcoin's Proof of Work consensus (e.g. Litecoin) and then later, at the smart contact level, with the 
launch and adoption of Ethereum. 

However, as the vision for the Internet of Blockchains gains traction, developers preference is now shifting 
toward Proof of Stake consensus and corresponding SDKs from Cosmos and Polkadot. This modular approach makes sense
from the perspective of engineers who want to rapidly deliver blockchain application that can scale 
to address real world problems. All of this implies that, in not too distant future, the majority of
tokens will be available or created within the this interconnected ecosystem of PoS blockchains. 
Kira will allow all those assets to trade in a fully trustless and permissionless manner.

Due to the way in which Proof of Stake consensus is secured, it's critical that PoS projects have 
access to at least one exchange so that a fair market value for the project's native token can be 
established. Because centralized (and decentralised) exchanges are able to arbitrarily delist tokens, 
the security of any PoS project can quickly be called into question. Because we offer an entirely 
permissionless listing process and provide censorship resistant access to the market, Kira aims 
to play an important role in securing the emerging Proof of Stake ecosystem.

## Q13: If a transaction occurs on a Cosmos Zone involving an asset originating from Kira (or vice versa) how does this work?

Before any asset can be traded on the Kira Exchange, it must first be sent via the IBC
protocol to the Kira Hub, and from there, it can be moved onto the specific exchange zone where 
trading will take place. From the user's perspective, this process occurs seamlessly and is entirely 
abstracted away.

## Q14: Via the community fund, users can vote to incentivise developers to contribue tooling to the Kira ecosystem, but what about the core functionality of the platform itself? This sort of engineering tends to require significant time commitment and a cohesive vision for the future of the project. Given that not everyone will understand the benefits of any given feature, how will you persuade users to vote in favor of complex technical proposals rather than quick wins (e.g block explorers)?

All on-chain contracting, for features both large and small, will indeed be conducted via
the community fund. However, there will be a code of conduct under which all 'governance bodies'
within the Kira ecosystem will vote in order to decide how these funds are allocated. 
Consider that, before the network reaches its 'enlightened democracy' phase (where
all participants are 'chain conscious' and aware of the broader issues) the network 
will effectively be a technocracy, implying that individuals lacking long term vision will 
be unlikely to enter the governance set.

## Q15: So all validators (no matter how many tokens they're staking) will have equal voting power, but rewards from exchange fees and block rewards will be proportional to the quantity of tokens staked. Is this correct?

Yes, except for fees. 50% of fees go to the validator that proposes a block (the rest go to delegators) 
but rewards received by delegators are distributed differently to block rewards. Fee rewards are proportional 
to stake bonded to a particular validator, which is the similar to Polkadot. Essentially, Kira uses
Polkadot's approach to distributing fee rewards but applies the same approach to block reward distribution 
as Cosmos.

## Q16: Why do validators recieve only 50% of the fees rewards when they do the majority of the leg work?

We believe that both delegators and validators have equally important roles. Delegators provide Kira's underlying 
network security and must be properly incentivized, but on the other hand, validators operate the platform for
everyone to use. These roles are distinct but equally valuable, which is why we set initial
'cosmological constant' for the reward split to be 50%.

The Kira governance set will always be free to modify any network parameter, and our
code of conduct helps to ensure that this process is not abused. The Cosmos Network 
operates in a is similar fashion; if governance decides to alter a network variable, the 
change can be actioned via the submission of a proposal and a subsequent vote. 

There is an assumption that this 50% ratio will be more likely to decrease than increase, but there must be sensible 
initial values in place when the network becomes operational (such as supply of tokens, inflation rate,
and many other parameters). Although no one can guess how the market will react, it 
will certainly show us its expectations.

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

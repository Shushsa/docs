---
id: exchange
title: Exchange
sidebar_label: Exchange
---

## Q1: Will you have a trollbox?

We intend to either build our own trollbox (in which case, messages would be stored on-chain) or integrate with a 
decentralized service offered by one of our partners, e.g. Sentinel dChat.

## Q2: Many centralized exchanges offer lower fees, or other incentives, to attract market makers. What incentives will Kira offer?

There are four ways that Kira will incentivize liquidity providers.

1. The liquidity pool embedded in our consensus engine directly rewards users for adding and staking assets.
2. Via our governance controlled community fund, on-chain contracting or via direct MMs/LPs incentivization.
3. The instant finality of our consensus mechanism enables MMs/LPs to reduce risk, narrow spreads and reduce operating costs.
4. Via partnership agreements; we will issue a number of 'validators seats' during our 'token mining' event to MMs and LPs wishing to integrate with Kira.

## Q3: IDEX recently went 'full KYC' - in the lite paper you state that users will never be forced to perform KYC for crypto-to-crypto pairs. How can you guarantee this?

In most jurisdictions, exchanges that custody user funds are required to subject their users to a  
KYC process. Kira does not custody funds, although, when withdrawing fiat from KiraEx, users will be 
required to use a 3rd party gateway that holds the appropriate licenses (such as Bity, E-money or Menapay). 
These companies all KYC their customers, but the thresholds vary between jurisdictions; for 
example, in case of Bity, users can withdraw up to $5000 USD, per month, without triggering KYC.

## Q4: How is Kira better than Binance DEX which is also using Tendermint consensus?

Kira has a unique staking and security model that brings increasing levels of both liquidity and 
security into the network. Furthermore, Kira Exchange is parallelizable which allows for higher
throughput. Kira also possesses higher accessibility because it does not require any hosted
backend or frontend that is operated by any centralized entity. Kira also does not hold custody
over user funds where Binance DEX does, so the trading is not trustless there yet. Kira is a 
self-sustained and self-governed network without any authority controlling any aspect of it, 
including the development.

## Q5: Most DEXs suffer from slow order book updates, how will Kira address this issue?

Kira employs a hub-and-spoke architecture and takes a dual approach to consensus. On 
individual zones (the spokes) we deploy small but highly curated validator sets in order to deliver 
extremely rapid settlement of trades, but on the Kira Hub (which acts as our settlement layer and is 
where there majority of assets are stored) we employ a much larger validator set, and as such,
transactions are necessarily slower.

## Q6: Most DEXs are only able to list tokens based on their native platform, e.g. EtherDelta only offers ERC20 tokens. Will Kira improve on this?

Kira is an Interchain Exchange; we'll connect to all major ecosystems such as Cosmos and 
Polkadot, and in addition to this, we can offer bridges to any public or private blockchain 
that offers either deterministic finality, or probabilistic finality within some reasonable 
timeframe.

## Q7: What will be the process for token listing? How will you filter out scams?

On KiraEx, any token can be listed instantly and traded in a fully permissionless manner; however, governance 
will ultimately determine which tokens are permitted to trade within which category of exchange zone. For 
example, there will be 'high-trust' zones within which the most liquid and reputable assets are traded, 
and other, more resource constrained zones, on which unknown and (as yet) untrusted token might operate. 
In order to list a token, one must simply vest the appropriate quality of any whitelisted asset, as a 
spam prevention mechanism.

## Q8: How will Kira implement its onchain liquidity pool?

The first iteration of our liquidity pool will enable transfers of stakeable assets (e.g. tokens 
representing corresponding claims on locked tokens) in conjunction with our Multi Bonded
Proof of Stake consensus design. This creates a self-balancing system that increases 
order book depth and bolsters the overall security of the network.

For example, by staking Bitcoin on KiraEx, users can earn passive income from exchange fees
over the period that the assets are locked. Users can later unlock their Bitcoin by waiting a 21 day 
unbonding period to elapse. However, if a user would prefer not to wait, they also have the option 
to sell (at a slight discount) the tokenized shares representing those staked tokens (e.g. sBTC) 
and claim the underlying asset immediately. On the other hand, this mechanism enables patient 
speculators to buy discounted claims on locked assets, wait an unbonding period, and profit. 

The volume traded on these secondary markets (e.g. sBTC vs. BTC) will tend to increase as total bonded 
stake grows across the exchange. This creates opportunities for users who do not immediately require 
access to their cryptoassets and injects value into the network via exchange fees. The value of shares 
representing staked tokens is predictable because a user can always claim back their tokens 
1:1, provided the validator from whom those shares originate has not been slashed. 

KiraEx features a dynamic inflation mechanism that incentivizes staking and a governance controlled slashing 
mechanic that ensures a baseline level of security for all bonded assets. Demand to release shares of staked tokens 
increases the overall use of the exchange, and the resulting fees help to grow network revenues. Increased revenues 
boosts delegation and bolsters the security of the network, again increasing demand for instant access to locked tokens, 
thus further driving the feedback loop.

## Q9: How does KiraEX combat fake or fraudulent asset listings?

Untrusted or non-approved assets can be listed in a permissionless fashion, however these 
tokens will, by default, reside within low-trust exchange zones. Because approved and trusted 
assets tend to trade on high-trust exchange zones, this offers users (and user interfaces) an easy 
way to differentiate token quality, such that users can be warned to proceed at own risk. Our governance set 
determines how, and when, tokens are moved between execution zones.

## Q10: How do you prevent spam listing?

In order to list a new token on KiraEx, it is necessary to lock-up a (governance defined) minimum 
amount of whitelisted tokens. In the case where this minimum requirement is not met, or tokens are
subsequently unlocked, a token no longer can be traded.
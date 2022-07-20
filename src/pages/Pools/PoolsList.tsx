import React from 'react'

// import { CurrencyAmount, Token } from 'sdk-core/entities'

// import { DoubleCurrencyLogo } from 'components/DoubleLogo/DoubleCurrencyLogo.stories'
// import { Link } from 'react-router-dom'
// import StakingModal from 'components/farm/StakingModal'
// import UnstakingModal from 'components/farm/UnstakingModal'
// import { isTruthy } from 'utils/isTruthy'

// import CurrencyLogo from 'components/CurrencyLogo'

import styled from 'styled-components'
import { Tux } from '../../components/farm/TuxBanner'
import { PoolsHeading } from '../../components/pool/PoolsHeading'

const FarmListContainer = styled.div`
  max-width: 1080px;
  width: 100%;
`

export function PoolsListPage() {
  {
    /*const pools = usePools()*/
  }

  return (
    <FarmListContainer>
      <Tux />
      <PoolsHeading />
      {/* {pools.map((pool) => pool.lpTokenAddress && <Pool key={pool.lpTokenAddress} {...pool} />).filter(isTruthy)} */}
      {/*<PoolsTable>
        {pools.map((pool) => (
          <Fragment key={pool.poolId}>
            <HRDark />
            <PoolRow {...pool} />
          </Fragment>
        ))}
      </PoolsTable>*/}
    </FarmListContainer>
  )
}

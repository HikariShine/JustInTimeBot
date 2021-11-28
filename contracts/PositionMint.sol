// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;
pragma abicoder v2;

import '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';
import '@uniswap/v3-core/contracts/libraries/TickMath.sol';
import '@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol';
import '@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';
import '@uniswap/v3-periphery/contracts/interfaces/INonfungiblePositionManager.sol';
import '@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol';
import '@uniswap/v3-periphery/contracts/base/LiquidityManagement.sol';


contract PositionMint is INonfungiblePositionManager {

 struct MintParams {
        address token0;
        address token1;
        uint24 fee;
        int24 tickLower;
        int24 tickUpper;
        uint256 amount0Desired;
        uint256 amount1Desired;
        uint256 amount0Min;
        uint256 amount1Min;
        address recipient;
        uint256 deadline;
    }


     struct IncreaseLiquidityParams {
        uint256 tokenId;
        uint256 amount0Desired;
        uint256 amount1Desired;
        uint256 amount0Min;
        uint256 amount1Min;
        uint256 deadline;
    }
    

        struct DecreaseLiquidityParams {
        uint256 tokenId;
        uint128 liquidity;
        uint256 amount0Min;
        uint256 amount1Min;
        uint256 deadline;
    }

        struct CollectParams {
        uint256 tokenId;
        address recipient;
        uint128 amount0Max;
        uint128 amount1Max;
    }

     function positions(
    uint256 tokenId
  ) external view returns (uint96 nonce, address operator, address token0, address token1, uint24 fee, int24 tickLower, int24 tickUpper, uint128 liquidity, uint256 feeGrowthInside0LastX128, uint256 feeGrowthInside1LastX128, uint128 tokensOwed0, uint128 tokensOwed1)



      function mint(
    struct INonfungiblePositionManager.MintParams params
  ) external returns (uint256 tokenId, uint128 liquidity, uint256 amount0, uint256 amount1)

  function increaseLiquidity(
    struct INonfungiblePositionManager.IncreaseLiquidityParams params
  ) external returns (uint128 liquidity, uint256 amount0, uint256 amount1)


    function decreaseLiquidity(
    struct INonfungiblePositionManager.DecreaseLiquidityParams params
  ) external returns (uint256 amount0, uint256 amount1)

    function collect(
    struct INonfungiblePositionManager.CollectParams params
  ) external returns (uint256 amount0, uint256 amount1)
  

event IncreaseLiquidity(
    uint256 tokenId,
    uint128 liquidity,
    uint256 amount0,
    uint256 amount1
  )

    event DecreaseLiquidity(
    uint256 tokenId,
    uint128 liquidity,
    uint256 amount0,
    uint256 amount1
  )

    event Collect(
    uint256 tokenId,
    address recipient,
    uint256 amount0,
    uint256 amount1
  )


  function createPosition(
struct INonfungiblePositionManager.MintParams params      ) external returns (uint tokenId, )


}
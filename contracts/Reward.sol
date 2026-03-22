// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Reward {
    mapping(address => uint256) public rewards;

    event RewardEarned(address user, uint256 amount);

    function earnReward(address user, uint256 amount) public {
        rewards[user] += amount;
        emit RewardEarned(user, amount);
    }

    function claimReward() public {
        uint256 reward = rewards[msg.sender];
        require(reward > 0, "No rewards available");

        rewards[msg.sender] = 0;
        payable(msg.sender).transfer(reward);
    }

    receive() external payable {}
}

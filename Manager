// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
//make multisig
contract Manager {
    

    mapping(address => uint) public addressToRewardPoints;
    mapping(address => bool) public isConcert;
    mapping (uint => address) public ticketIDtoContract;
    uint ticketId;

    
    function createEvent (
    string memory baseURI, 
    string memory _eventTitle, 
    string memory _eventTime, 
    uint _generalAdmissionPrice, 
    uint _VIPPrice, 
    uint _generalMaxAdmission, 
    uint _VIPMaxAdmission,
    uint _performerPayment,
    address _royaltyReceiver,
    uint96 _royaltyFeesInBips)  external returns (address){
        Concert newConcert = new Concert(baseURI,  _eventTitle, _eventTime, _generalAdmissionPrice, _VIPPrice, _generalMaxAdmission, _VIPMaxAdmission, _performerPayment, _royaltyReceiver,_royaltyFeesInBips);
        ticketIDtoContract[ticketId] = address(newConcert);
        isConcert[address(newConcert)] = true;
        return address(newConcert);
     }

     function addRewardPoints (uint points) public {
        require(isConcert[msg.sender]);
        addressToRewardPoints[tx.origin] += points;
     }
    function removeRewardPoints () public {
        require(isConcert[msg.sender]);
        delete addressToRewardPoints[tx.origin];
     }
     function getaddressToRewardPoints (address _address) public view returns (uint){
         return addressToRewardPoints[_address];
     }

    function getisConcert (address _address) public view returns (bool) {
        return isConcert[_address];
    }
    function getticketIDtoContract (uint _uint) public view returns (address) {
        return ticketIDtoContract[_uint];
    }

}



contract Concert is ERC721Enumerable {

    address managerAddress;
    Manager ManagerInstance = Manager(managerAddress);


    //strings library
    using Strings for uint256;
    //Metadata link
    string _baseTokenURI;
    //tokenId counter
    uint tokenId;
    //Name of event (defined in constructor)
    string eventTitle;
    //Time/Date of event (defined in constructor)
    bool public paused;
    string eventTime;
    address royaltyAddress;
    address owner;
    // list of all users that checked in the event
    uint performerPayment;
    
    mapping(uint => bool) public isCheckedIn;
    mapping(address => bool) public isEmployee;

    //price of general admission (defined in constructor)
    uint generalPrice;
    //price of VIP admission (defined in constructor)
    uint VIPPrice;



    //max amount of general admission tickets allowed to be sold
    uint generalMaxAdmission;
    //max amount of VIP admission tickets allowed to be sold
    uint VIPMaxAdmission;
    //total general admission sold counter
    uint totalGeneralAdmission;
    //total VIP admission sold counter
    uint totalVIPAdmission;
    uint96 royaltyFeesInBips;
    address royaltyReceiver;
    bool performerIsPaid = false;
    //Mapping which returns the type of
    //0 will be general
    //1 will be VIP
    mapping(uint => uint) tokenIdToAdmissionType;

    address ReceiveingArtist;
    //uint96 _royaltyFeesInBips
    //address _royaltyReceiver
    //constructor
    constructor(
        string memory baseURI, 
        string memory _eventTitle, 
        string memory _eventTime, 
        uint _generalAdmissionPrice, 
        uint _VIPPrice, 
        uint _generalMaxAdmission, 
        uint _VIPMaxAdmission,
        uint _performerPayment,
        address _royaltyReceiver,
        uint96 _royaltyFeesInBips)
 
        ERC721("Ticket", "TCK") {
    
    _baseTokenURI = baseURI;
    eventTitle = _eventTitle;
    eventTime = _eventTime;
    generalPrice = _generalAdmissionPrice;
    VIPPrice = _VIPPrice;
    generalMaxAdmission = _generalMaxAdmission;
    VIPMaxAdmission = _VIPMaxAdmission;
    performerPayment = _performerPayment;
    owner = tx.origin;
    royaltyFeesInBips = _royaltyFeesInBips;
    royaltyReceiver = _royaltyReceiver;
    managerAddress = msg.sender;
    }

    function setPaused(bool _paused) public {
        require(msg.sender == owner, "You are not the owner");
        paused = _paused;
    }

    function setCheckedIn(uint _tokenId) public {
        require(msg.sender == ownerOf(tokenId));
        isCheckedIn[_tokenId] = true;
    }

    function getCheckedIn(uint _tokenId) public view returns (bool) {
        return isCheckedIn[_tokenId];
    }
    function setIsEmployee(address employee) public {
        require(msg.sender == owner);
        isEmployee[employee] = true;
    }
    function getIsEmployee(address employee) public view returns (bool) {
        return isEmployee[employee];
    }
    



    function transferFunds(address payable artist, uint256 amount) payable public {
        artist.transfer(amount);
    }

    
    function setRoyaltyInfo(address _receiver, uint96 _royaltyFeesInBips) public {
        require(msg.sender == owner);
        royaltyAddress = _receiver;
        royaltyFeesInBips = _royaltyFeesInBips;
    }
        //The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(address from, address to, uint256 _tokenId)
        internal
        override(ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

     function royaltyInfo(uint256 _tokenId, uint256 _salePrice)
        external
        view
        virtual
        returns (address, uint256)
    {
        return (royaltyAddress, calculateRoyalty(_salePrice));
    }

    function calculateRoyalty(uint256 _salePrice) view public returns (uint256) {
        return (_salePrice / 10000) * royaltyFeesInBips;
    }

    function supportsInterface(bytes4 interfaceId)
            public
            view
            override (ERC721Enumerable)
            returns (bool)
    {
        return interfaceId == 0x2a55205a || super.supportsInterface(interfaceId);
    }

    //returns the updated cost of the purchase with rewards applied
   function calculateRewardsPrice(uint _amount,uint _generalOrVIP) public view returns (uint){
       uint ticketPrice;
       if(_generalOrVIP == 0){
           ticketPrice = generalPrice;
       }
       else {
           ticketPrice = VIPPrice;

       }

        uint subTotal = generalPrice * _amount;
        uint256 userRewards = ManagerInstance.getaddressToRewardPoints(tx.origin);
        uint total = subTotal - userRewards;
        return total;            
   }


    // address to boolean, getter
    //purchase function
    function purchaseTicket(uint256 _amount, uint256 admissionType, bool usePoints) payable public {
        require(totalGeneralAdmission < generalMaxAdmission);
        require(totalVIPAdmission < VIPMaxAdmission);
        //asks user if they want to use rewards points
        if(usePoints == true){
            //if the user wants to buy general admission tickets with rewards points
            if(msg.value == generalPrice * _amount && admissionType == 0){
                //require they paid the correct price
                require(calculateRewardsPrice(_amount,0) == msg.value);
                //mints NFTS
                for(uint i; i < _amount; i++){
                    tokenId++;
                    tokenIdToAdmissionType[tokenId] = 0;
                    _mint(msg.sender,tokenId);

            }
            }
            //if the user wants to buy VIP admission tickets with rewards points
            else if(msg.value == VIPPrice * _amount && admissionType == 1){
                //require they paid the correct price
                require(calculateRewardsPrice(_amount,1) == msg.value);
                //mints NFTS
                for(uint i; i < _amount; i++){
                    tokenId++;
                    tokenIdToAdmissionType[tokenId] = 1;
                    _mint(msg.sender,tokenId);
            }
        }
        else{
            revert("Not enough or too much money");
        }
        }
        //purchase without using rewards points
        else if (usePoints == false){
            
            if(msg.value == generalPrice * _amount && admissionType == 0){
                for(uint i; i < _amount; i++){
                    tokenId++;
                    tokenIdToAdmissionType[tokenId] = 0;
                    _mint(msg.sender,tokenId);

                }
            }
            //called for VIP adminsion
            else if(msg.value == VIPPrice * _amount && admissionType == 1){
                for(uint i; i < _amount; i++){
                    tokenId++;
                    tokenIdToAdmissionType[tokenId] = 1;
                    _mint(msg.sender,tokenId);
                }
        }
        else{
            revert("Not enough or too much money");
        }
        }
    }

    /**
    * @dev _baseURI overides the Openzeppelin's ERC721 implementation which by default
    * returned an empty string for the baseURI
    */
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    /**
    * @dev tokenURI overides the Openzeppelin's ERC721 implementation for tokenURI function
    * This function returns the URI from where we can extract the metadata for a given tokenId
    */
    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory baseURI = _baseURI();
        // Here it checks if the length of the baseURI is greater than 0, if it is return the baseURI and attach
        // the tokenId and `.json` to it so that it knows the location of the metadata json file for a given
        // tokenId stored on IPFS
        // If baseURI is empty return an empty string
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), ".json")) : "";
    }

    /**
    * @dev withdraw sends all the ether in the contract
    * to the owner of the contract
        */
    function withDraw() public view {
        require(msg.sender == owner);
        require(performerIsPaid);
        
    }
    function payPerformer () public {
        address payable performer = payable(royaltyAddress);
        performer.transfer(performerPayment);
        performerIsPaid = true;
    }

        // Function to receive Ether. msg.data must be empty
    receive() external payable {}

    // Fallback function is called when msg.data is not empty
    fallback() external payable {}

  }

/*interface IManager {
   function getResult() external view returns (uint){

   }
}
*/


//function purchase (uint256 quantity, uint256 admissionType) public payable {
//        if (true && admissionType==0) {
//            subTotal = generalPrice * quantity;
//            userRewards = userRewards.getaddressToRewardPoints[msg.sender];
//            total = subTotal - userRewards;
//        }
//        if (userRewards > 0){
//            subTotal = subTotal - userRewards;
//            newRewardTotal = removeRewardPoints(msg.sender);
//        }
//        else if (userRewards == 0){
//            //2 % rewards points
//            uint pointsToBeAdded = msg.value * bp / 10000;
//            newsetRewardsPoints[tx.origin]  += rewardsPoints;
//        }

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract StudyContract is ERC721,  Ownable {
  constructor()ERC721("Day of Web3Girls NFT", "DoW3G"){
    _tokenCount = 0;
    _baseTokenUri = "https://web3honey.infura-ipfs.io/ipfs/QmTNPrfNHPxuGu27izmtwijCrCp2Ra1D3woRPAKSEKTmwk";
  }

  uint256 _tokenCount;
  string private _baseTokenUri;

  mapping(address => bool) isMinted;
  mapping(uint256 => string) idToNumber;

  function mint() public {
    require(!isMinted[msg.sender], "You cannot mint twice");
    _safeMint(msg.sender, _tokenCount);
    isMinted[msg.sender] = true;
    ++_tokenCount;
  }

  function tokenURI(uint256 tokenId) public view override(ERC721)returns(string memory){
    bytes memory uri = abi.encodePacked(_baseTokenUri, idToNumber[tokenId]);
    return string(uri);
  }

  function setBaseTokenUri(string memory  uri) public onlyOwner {
    _baseTokenUri = uri;
  }

  function baseTokenURI()
  public view returns(string memory) {
    return _baseTokenUri;
  }

}

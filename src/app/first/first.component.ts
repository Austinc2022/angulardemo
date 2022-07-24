import { Component, OnInit } from '@angular/core';
import data from '../../assets/characters.json';
import { CharacterType, AbilityType, TagType } from '../interfaces/character';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})


export class FirstComponent implements OnInit {

  characters = data;
  selectedTag = '';
  searchString = ''; 

  constructor() { }


  ngOnInit(): void {
    
  }

  findAbility(hero:CharacterType, ability:string) {
    let heroAbility = hero.abilities.find((searchAbility:AbilityType) => { 
      return searchAbility.abilityName == ability ? searchAbility.abilityScore : ''; 
    });  
    if (heroAbility != null && heroAbility.abilityScore != null) {
      return heroAbility.abilityScore;
    } else {
      return 0;
    }
  }

  getAllTags() {
    let result:string[] = [];
    data?.forEach((charactor) => {
      charactor?.tags?.forEach((tag:TagType) => {
        result.push(tag.tag_name);
      })
    });
    return result.filter((value, index, self) => {
      return self.indexOf(value) === index
    });
  }

  setSelectedTag(tagName:string) {
    if (tagName == this.selectedTag) {
      this.selectedTag = '';
    } else {
      this.selectedTag = tagName;
    }
    this.filterCharacters();
  }

  setSearchString(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchString = target.value;
    this.filterCharacters();
  }

  resetCharacters() {
    this.characters = data;
    this.selectedTag = '';
  }

  filterCharacters() {
    this.characters = data;
    if (this.selectedTag != '') {
      this.characters =  this.characters.filter((charactor:CharacterType, index:number) => {
        if (charactor?.tags?.find((tag) => { return tag.tag_name == this.selectedTag })) {
          return true;
        } else {
          return false;
        }
      });
    }
    if (this.searchString != "") {
      this.characters =  this.characters.filter((charactor, index) => {
        return charactor.name.toLowerCase().includes(this.searchString.toLowerCase());
      });
    } 
  }

}

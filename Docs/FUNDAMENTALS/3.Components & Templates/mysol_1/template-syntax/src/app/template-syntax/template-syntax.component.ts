import { Component, AfterViewInit, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Hero } from '../interface/hero';

export enum Color {Red, Green, Blue};

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.less']
})
export class TemplateSyntaxComponent implements OnInit {

  constructor(private router: Router) { }

  title = 'Template Syntax';
  heroImageUrl = 'assets/images/soundwave.png';

  toggleSyntaxList = false;

  actionName = 'Go for it';
  badCurly = 'bad curly';
  classes = 'special';
  help = '';

	canSave =  true;

	clicked = '';
  clickMessage = '';
  clickMessage2 = '';

  Color = Color;
  color = Color.Red;

  currentHero: Hero;

  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

  fontSizePx = 16;

  name: string = Hero.heroes[0].name;
  hero: Hero;
  heroes: Hero[];

  // trackBy change counting
  heroesNoTrackByCount   = 0;
  heroesWithTrackByCount = 0;
  heroesWithTrackByCountReset = 0;

  heroIdIncrement = 1;
  villainImageUrl = 'assets/images/optimum.jpeg';






  
  iconUrl = 'assets/images/starscream.jpeg';
  isActive = false;
  isSpecial = true;
  isUnchanged = true;

  product = {
    name: 'frimfram',
    price: 42
  };

  currentClasses: {};
  currentStyles: {};


  ngOnInit(): void {
    this.resetHeroes();
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  ngAfterViewInit() {
    // Detect effects of NgForTrackBy
    trackChanges(this.heroesNoTrackBy,   () => this.heroesNoTrackByCount++);
    trackChanges(this.heroesWithTrackBy, () => this.heroesWithTrackByCount++);
  }

  @ViewChildren('noTrackBy')   heroesNoTrackBy: QueryList<ElementRef>;
  @ViewChildren('withTrackBy') heroesWithTrackBy: QueryList<ElementRef>;

  alert(msg?: string)      { window.alert(msg); }
  callFax(value: string)   { this.alert(`Faxing ${value} ...`); }
  callPhone(value: string) { this.alert(`Calling ${value} ...`); }

  changeIds() {
    this.resetHeroes();
    this.heroes.forEach(h => h.id += 10 * this.heroIdIncrement++);
    this.heroesWithTrackByCountReset = -1;
  }

  clearTrackByCounts() {
    const trackByCountReset = this.heroesWithTrackByCountReset;
    this.resetHeroes();
    this.heroesNoTrackByCount = -1;
    this.heroesWithTrackByCount = trackByCountReset;
    this.heroIdIncrement = 1;
  }

  colorToggle() {this.color = (this.color === Color.Red) ? Color.Blue : Color.Red; }

  updateCurrentHeroName(event: Event) {
    this.currentHero.name = (event.target as any).value;
  }

  deleteHero(hero?: Hero) {
    this.alert(`Delete ${hero ? hero.name : 'the hero'}.`);
  }

  getVal(): number { return 2; }

  get nullHero(): Hero { return null; }

  onClickMe(event?: MouseEvent) {
    const evtMsg = event ? ' Event target class is ' + (event.target as HTMLElement).className  : '';
    this.alert('Click me.' + evtMsg);
  }

  onSave(event?: MouseEvent) {
    const evtMsg = event ? ' Event target is ' + (event.target as HTMLElement).textContent : '';
    this.alert('Saved.' + evtMsg);
    if (event) { event.stopPropagation(); }
  }

  onSubmit(data: any) {/* referenced but not used */}

  // updates with fresh set of cloned heroes
  resetHeroes() {
    this.heroes = Hero.heroes.map(hero => hero.clone());
    this.currentHero = this.heroes[0];
    this.hero = this.currentHero;
    this.heroesWithTrackByCountReset = 0;
  }

  setUppercaseName(name: string) {
    this.currentHero.name = name.toUpperCase();
  }

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses =  {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special:  this.isSpecial
    };
  }
  
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }

  trackByHeroes(index: number, hero: Hero): number { return hero.id; }

  trackById(index: number, item: any): number { return item.id; }

  goTop(): void {
  	// this.router.navigate(['/template-syntax']);
  	document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}

function trackChanges(views: QueryList<ElementRef>, changed: () => void) {
  let oldRefs = views.toArray();
  views.changes.subscribe((changes: QueryList<ElementRef>) => {
      const changedRefs = changes.toArray();
      // Check if every changed Element is the same as old and in the same position
      const isSame = oldRefs.every((v, i) => v.nativeElement === changedRefs[i].nativeElement);
      if (!isSame) {
        oldRefs = changedRefs;
        // wait a tick because called after views are constructed
        setTimeout(changed, 0);
      }
  });
}



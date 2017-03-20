import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes-component/heroes-component.component';
import { Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from '../hero.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail-hero',
  moduleId: module.id,
  templateUrl: './detail-hero.component.html',
  styleUrls: ['./detail-hero.component.css']
})
export class DetailHeroComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}

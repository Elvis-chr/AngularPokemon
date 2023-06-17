import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbunPokemonComponent } from './albun-pokemon.component';

describe('AlbunPokemonComponent', () => {
  let component: AlbunPokemonComponent;
  let fixture: ComponentFixture<AlbunPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbunPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbunPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

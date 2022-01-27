import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIdiomaComponent } from './cadastro-idioma.component';

describe('CadastroIdiomaComponent', () => {
  let component: CadastroIdiomaComponent;
  let fixture: ComponentFixture<CadastroIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroIdiomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { MockSearchService } from '../shared/search/mocks/search.service';
import { MockActivatedRoute } from '../shared/search/mocks/routes';
import { SearchService } from '../shared/search/search.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let mockSearchService: MockSearchService;
  let mockActivatedRoute: MockActivatedRoute;

  beforeEach(() => {
    mockSearchService = new MockSearchService();
    mockActivatedRoute = new MockActivatedRoute({'term': 'Ned'});

    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      providers: [
        {provide: SearchService, useValue: mockSearchService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ],
      imports: [FormsModule, RouterTestingModule]
    }).compileComponents();

      fixture = TestBed.createComponent(SearchComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });


  it('should search when a term is set and search() is called', () => {
    component = fixture.debugElement.componentInstance;
    component.query = 'Ne';
    component.search();
    expect(mockSearchService.searchSpy).toHaveBeenCalledWith('test');
  });

});

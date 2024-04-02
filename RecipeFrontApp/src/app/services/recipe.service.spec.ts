import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RecipeService } from './recipe.service';
import { RecipeResponse } from '../interfaces/recipe';

describe('RecipeService', () => {
  let service: RecipeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipeService]
    });
    service = TestBed.inject(RecipeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // check ig no requests outstanding
  });


  it('should retrieve recipes from API-EDAMAME by GET', () => {
    expect(service).toBeTruthy(); // checks that recipes are received

    const searchTerm = 'beef'; //example for searchterm
    const req = httpTestingController.expectOne(req => req.url.includes(searchTerm));
    expect(req.request.method).toBe('GET');
    req.flush([]); // Simulate an empty response (array)
  });

  it('should handle errors when retrieving recipes', () => {
    const searchTerm = 'chicken';
    const errorMessage = 'Error retrieving recipes';

    service.searchRecipes(searchTerm).subscribe(
      () => fail('should have failed with an error'),
      error => {
        expect(error.message).toEqual(errorMessage);
      }
    );
  });
});
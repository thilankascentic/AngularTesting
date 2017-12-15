
// import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
// import { SearchService } from './search.service';
// import { BaseRequestOptions, Http, ConnectionBackend, Response, ResponseOptions } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';

// describe('SearchService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [SearchService,
//         {
//           provide: Http, useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
//           return new Http(backend, defaultOptions);
//         }, deps: [MockBackend, BaseRequestOptions]
//         },
//         {provide: MockBackend, useClass: MockBackend},
//         {provide: BaseRequestOptions, useClass: BaseRequestOptions}
//       ]
//     });
//   });

//   it('should retrieve search results',
//     inject([SearchService, MockBackend], fakeAsync((searchService: SearchService, mockBackend: MockBackend) => {
//       let res: Response;

//       mockBackend.connections.subscribe(c => {
//         const response = new ResponseOptions({body: '[{"name": "Jon arryn"}, {"name": "Ned Stark"}]'});
//         c.mockRespond(new Response(response));
//       });

//       searchService.getAll().subscribe((response) => {
//         res = response;
//       });
//       tick();
//       expect(res[0].name).toBe('Jon arryn');
//     }))
//   );

//   it('should filter by search term',
//     inject([SearchService, MockBackend], fakeAsync((searchService: SearchService, mockBackend: MockBackend) => {
//       let res;
//       mockBackend.connections.subscribe(c => {
//         const response = new ResponseOptions({body: '[{"name": "Jon arryn"}, {"name": "Ned Stark"}]'});
//         c.mockRespond(new Response(response));
//       });

//       searchService.search('Jon').subscribe((response) => {
//         res = response;
//       });

//       tick();
//       expect(res[0].name).toBe('Jon arryn');
//     }))
//   );

//   it('should fetch by id',
//     inject([SearchService, MockBackend], fakeAsync((searchService: SearchService, mockBackend: MockBackend) => {
//       let res;
//       mockBackend.connections.subscribe(c => {
//         const response = new ResponseOptions({body: '[{"id": 1, "name": "Jon arryn"}, {"id": 2, "name": "Ned Stark"}]'});
//         c.mockRespond(new Response(response));
//       });
//       searchService.search('1').subscribe((response) => {
//         res = response;
//       });
//       tick();
//       expect(res[0].name).toBe('Jon arryn');
//     }))
//   );
// });

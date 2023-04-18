import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { OverviewComponent } from './overview.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UploadedDocument } from 'src/app/models/documents.model';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OverviewComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FontAwesomeTestingModule,
      ],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // BMcQ Comment: Unit Test for Document Filtering via Language
  it('should filter documents by language when user language changes', () => {
    const mockdocuments: UploadedDocument[] = [
      {
        _id: '1',
        title: 'Document 1',
        pages: ['Sentence 1.', 'Sentence 2.'],
        language: 'English',
      },
      {
        _id: '2',
        title: 'Document 2',
        pages: ['Phrase 1', 'Phrase 2'],
        language: 'French',
      },
      {
        _id: '3',
        title: 'Document 3',
        pages: ['Abairt 1', 'Abairt 2'],
        language: 'Irish',
      },
    ];
    const expectedDocuments: UploadedDocument[] = [
      {
        _id: '2',
        title: 'Document 2',
        pages: ['Phrase 1', 'Phrase 2'],
        language: 'French',
      },
    ];

    // BMcQ Comment: Given mock data, does our filter function work as expected.
    expect(component.filterDocuments(mockdocuments, 'French')).toEqual(
      expectedDocuments
    );
  });
});

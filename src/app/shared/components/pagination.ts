import type { UbButtonSize } from 'src/app/shared/components/button';
import { booleanAttribute, Component, computed, Directive, effect, inject, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronLeft, lucideChevronRight, lucideEllipsis } from '@ng-icons/lucide';
import { cn } from 'src/app/shared/utils/utils';
import { buttonVariants } from 'src/app/shared/components/button';

@Directive({
  standalone: true,
  selector: 'nav[ubPagination]',
  host: {
    role: 'navigation',
    'aria-label': 'pagination',
    '[class]': 'computedClass()',
  },
})
export class UbPaginationDirective {
  class = input<string>();
  computedClass = computed(() => cn('mx-auto flex w-full justify-center', this.class()));
}

@Directive({
  standalone: true,
  selector: 'ul[ubPaginationContent]',
  host: {
    '[class]': 'computedClass()',
  },
})
export class UbPaginationContentDirective {
  class = input<string>();
  computedClass = computed(() => cn('flex flex-row items-center gap-1', this.class()));
}

@Directive({
  standalone: true,
  selector: 'li[ubPaginationItem]',
})
export class UbPaginationItemDirective {}

@Directive({
  standalone: true,
  selector: '[ubPaginationLink]',
  host: {
    '[aria-current]': 'isActive() ? "page" : undefined',
    '[class]': 'computedClass()',
  },
})
export class UbPaginationLinkDirective {
  class = input<string>();
  isActive = input(false, { transform: booleanAttribute });
  size = input<UbButtonSize>('icon');
  computedClass = computed(() =>
    cn(
      buttonVariants({
        variant: this.isActive() ? 'outline' : 'ghost',
        size: this.size(),
      }),
      this.class(),
    ),
  );
}

@Component({
  standalone: true,
  selector: '[ubPaginationPrevious]',
  imports: [NgIcon],
  hostDirectives: [UbPaginationLinkDirective],
  host: {
    '[class]': 'computedClass()',
    'aria-label': 'Go to previous page',
  },
  providers: [provideIcons({ lucideChevronLeft })],
  template: `
    <ng-icon name="lucideChevronLeft"></ng-icon>
    <span class="hidden sm:block">Previous</span>
  `,
})
export class UbPaginationPreviousDirective {
  class = input<string>();
  computedClass = computed(() => cn('gap-1 px-2.5 sm:pl-2.5', this.class()));
  protected size = input<UbButtonSize>('default');
  private ubPaginationLinkDirective = inject(UbPaginationLinkDirective, { host: true });

  setConfig = effect(() => {
    this.ubPaginationLinkDirective.size = this.size;
  });
}

@Component({
  standalone: true,
  selector: '[ubPaginationNext]',
  imports: [NgIcon],
  providers: [provideIcons({ lucideChevronRight })],
  hostDirectives: [UbPaginationLinkDirective],
  host: {
    '[class]': 'computedClass()',
    'aria-label': 'Go to next page',
  },
  template: `
    <span class="hidden sm:block">Next</span>
    <ng-icon name="lucideChevronRight"></ng-icon>
  `,
})
export class UbPaginationNextDirective {
  class = input<string>();
  computedClass = computed(() => cn('gap-1 px-2.5 sm:pr-2.5', this.class()));
  protected size = input<UbButtonSize>('default');
  private ubPaginationLinkDirective = inject(UbPaginationLinkDirective, { host: true });

  setConfig = effect(() => {
    this.ubPaginationLinkDirective.size = this.size;
  });
}

@Component({
  standalone: true,
  imports: [NgIcon],
  providers: [provideIcons({ lucideEllipsis })],
  selector: 'ub-pagination-ellipsis',
  template: `
    <span aria-hidden="true" [class]="computedClass()">
      <ng-icon name="lucideEllipsis" class="size-4"></ng-icon>
      <span class="sr-only">More pages</span>
    </span>
  `,
})
export class UbPaginationEllipsisComponent {
  class = input<string>();
  computedClass = computed(() => cn('flex size-9 items-center justify-center', this.class()));
}

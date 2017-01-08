var root;

root = typeof exports !== "undefined" && exports !== null ? exports : this;

root.Page = function(parent, page_number) {
  var Page, base;
  Page = (function() {
    function Page(parent1, page_number1) {
      this.parent = parent1;
      this.page_number = page_number1;
      this.items = null;
      this.start = (this.page_number - 1) * this.parent.items_by_page;
      this.stop = (this.page_number * this.parent.items_by_page) - 1;
      this.size = this.parent.items_by_page;
      this.show_after_fetch = false;
      this.fetch();
      this.show = function() {
        if ((this.parent.fetch_url === "") || (this.items != null)) {
          this.parent.show_page_callback(this);
          this.parent.current_page = this.page_number;
          return this.parent.update_pagination(this.page_number);
        } else {
          return this.show_after_fetch = true;
        }
      };
    }

    Page.prototype.fetch = function() {
      return this.parent.ajax({
        'start': this.start,
        'stop': this.stop,
        'size': this.size,
        'filter': this.parent.filter_text
      }, (function(page) {
        return function(data) {
          page.items = data;
          if (page.show_after_fetch) {
            page.show_after_fetch = false;
            return page.show(page);
          }
        };
      })(this));
    };

    return Page;

  })();
  if ((base = parent.page_instances)[page_number] == null) {
    base[page_number] = new Page(parent, page_number);
  }
  return parent.page_instances[page_number];
};

root.Pagination = function(pagination_id, fetch_url, show_page_callback, items_by_page, total_items, visible_pages) {
  var Pagination, base, base1;
  if (fetch_url == null) {
    fetch_url = '';
  }
  if (show_page_callback == null) {
    show_page_callback = function() {};
  }
  if (items_by_page == null) {
    items_by_page = 1;
  }
  if (total_items == null) {
    total_items = 100;
  }
  if (visible_pages == null) {
    visible_pages = 9;
  }
  Pagination = (function() {
    function Pagination(pagination_id1, fetch_url1, show_page_callback1, items_by_page1, total_items1, visible_pages1, filter_text1) {
      this.pagination_id = pagination_id1;
      this.fetch_url = fetch_url1;
      this.show_page_callback = show_page_callback1;
      this.items_by_page = items_by_page1;
      this.total_items = total_items1;
      this.visible_pages = visible_pages1;
      this.filter_text = filter_text1 != null ? filter_text1 : '';
      this.page_instances = {};
      this.filtered_pagination = null;
      this.ajax({
        'info': true,
        'filter': this.filter_text
      }, (function(pagination) {
        return function(data) {
          if ((data != null)) {
            if ((data['ITEMS_BY_PAGE'] != null)) {
              pagination.items_by_page = parseInt(data['ITEMS_BY_PAGE']);
            }
            if ((data['TOTAL_ITEMS'] != null)) {
              pagination.total_items = parseInt(data['TOTAL_ITEMS']);
            }
            if ((data['VISIBLE_PAGES'] != null)) {
              pagination.visible_pages = parseInt(data['VISIBLE_PAGES']);
            }
          }
          return pagination.calc_pages();
        };
      })(this));
    }

    Pagination.prototype.calc_pages = function() {
      this.current_page = this.total_items > 0 ? 1 : 0;
      this.first_item = this.total_items > 0 ? 1 : 0;
      this.last_item = this.total_items;
      this.first_page = this.total_items > 0 ? 1 : 0;
      this.total_pages = Math.ceil(this.total_items / this.items_by_page);
      this.last_page = this.total_pages;
      return this.show_page(this.first_item);
    };

    Pagination.prototype.ajax = function(data, callback) {
      if (this.fetch_url !== '') {
        if (($.zepto != null)) {
          return $.ajax({
            url: this.fetch_url,
            type: 'GET',
            dataType: 'json',
            data: data,
            'complete': callback
          });
        } else {
          return $.ajax({
            url: this.fetch_url,
            type: 'GET',
            dataType: 'json',
            data: data
          }).done(callback);
        }
      } else {
        return callback();
      }
    };

    Pagination.prototype.pagination_items = function(current_page) {
      var add_page, i, j, k, l, m, pagination_visible, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7;
      visible_pages = this.visible_pages - 2;
      pagination_visible = [];
      add_page = function(i, type, position) {
        var item;
        if (type == null) {
          type = 'page';
        }
        if (position == null) {
          position = null;
        }
        if (type === 'page') {
          item = {
            'is_link': i !== current_page,
            'number': i,
            'content': "" + i,
            'class': i === current_page ? 'current' : 'page'
          };
        } else if (type === 'prev') {
          item = {
            'is_link': true,
            'number': i,
            'content': "Prev",
            'class': 'prev'
          };
        } else if (type === 'next') {
          item = {
            'is_link': true,
            'number': i,
            'content': "Next",
            'class': 'next'
          };
        } else if (type === 'prev_disabled') {
          item = {
            'is_link': false,
            'number': i,
            'content': "Prev",
            'class': 'prev disabled'
          };
        } else if (type === 'next_disabled') {
          item = {
            'is_link': false,
            'number': i,
            'content': "Next",
            'class': 'next disabled'
          };
        } else if (type === 'dots') {
          item = {
            'is_link': false,
            'number': i,
            'content': "...",
            'class': 'dots'
          };
        }
        if ((position != null)) {
          return pagination_visible.splice(position, 0, item);
        } else {
          return pagination_visible.push(item);
        }
      };
      if (this.total_pages <= visible_pages) {
        for (i = j = ref = this.first_page, ref1 = this.total_pages; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
          new root.Page(this, i);
          add_page(i);
        }
      } else {
        if (current_page <= (Math.floor(visible_pages / 2) + 1)) {
          for (i = k = ref2 = this.first_page, ref3 = visible_pages - 2; ref2 <= ref3 ? k <= ref3 : k >= ref3; i = ref2 <= ref3 ? ++k : --k) {
            new root.Page(this, i);
            add_page(i);
          }
          add_page(0, 'dots');
          new root.Page(this, this.last_page);
          add_page(this.last_page);
        } else if (current_page > (this.total_pages - (Math.floor(visible_pages / 2) + 1))) {
          for (i = l = ref4 = this.total_pages - (visible_pages - 3), ref5 = this.total_pages; ref4 <= ref5 ? l <= ref5 : l >= ref5; i = ref4 <= ref5 ? ++l : --l) {
            new root.Page(this, i);
            add_page(i);
          }
          add_page(0, 'dots', 0);
          new root.Page(this, this.first_page);
          add_page(this.first_page, 'page', 0);
        } else {
          for (i = m = ref6 = current_page - (Math.floor(visible_pages / 2) - 2), ref7 = current_page + (Math.floor(visible_pages / 2) - 2); ref6 <= ref7 ? m <= ref7 : m >= ref7; i = ref6 <= ref7 ? ++m : --m) {
            new root.Page(this, i);
            add_page(i);
          }
          add_page(0, 'dots', 0);
          new root.Page(this, this.first_page);
          add_page(this.first_page, 'page', 0);
          add_page(0, 'dots');
          new root.Page(this, this.last_page);
          add_page(this.last_page);
        }
      }
      if (current_page > this.first_page) {
        new root.Page(this, current_page - 1);
        add_page(current_page - 1, 'prev', 0);
      } else {
        add_page(0, 'prev_disabled', 0);
      }
      if (current_page < this.last_page) {
        new root.Page(this, current_page + 1);
        add_page(current_page + 1, 'next');
      } else {
        add_page(0, 'next_disabled');
      }
      return pagination_visible;
    };

    Pagination.prototype.update_pagination = function(page_number) {
      var $item, $li, $pagination, $ul, j, len, page, ref, results;
      $pagination = $(this.pagination_id);
      $pagination.html('');
      $ul = $('<ul>');
      $ul.addClass('pagination');
      $pagination.append($ul);
      ref = this.pagination_items(page_number);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        page = ref[j];
        $li = $('<li>');
        $ul.append($li);
        if (page.is_link) {
          $item = $('<a href="#">');
          $item.attr('data-page', page.number);
          $item.on('click', (function(pagination) {
            return function(e) {
              e.preventDefault();
              return pagination.show_page(parseInt($(this).attr('data-page')));
            };
          })(this));
        } else {
          $item = $('<span>');
        }
        $item.addClass(page["class"]);
        $item.html(page.content);
        results.push($li.html($item));
      }
      return results;
    };

    Pagination.prototype.show_first = function() {
      return this.show_page(this.first_page);
    };

    Pagination.prototype.show_last = function() {
      return this.show_page(this.last_page);
    };

    Pagination.prototype.has_prev = function() {
      return this.current_page > this.first_page;
    };

    Pagination.prototype.has_next = function() {
      return this.current_page < this.last_page;
    };

    Pagination.prototype.show_prev = function() {
      if (this.has_prev()) {
        return this.show_page(this.current_page - 1);
      }
    };

    Pagination.prototype.show_next = function() {
      if (this.has_next()) {
        return this.show_page(this.current_page + 1);
      }
    };

    Pagination.prototype.show_page = function(page_number) {
      var page;
      page = new root.Page(this, page_number);
      return page.show();
    };

    Pagination.prototype.filter = function(filter_text) {
      if (filter_text === '') {
        return this.show_page(this.current_page);
      } else {
        return this.filtered_pagination = new Pagination(this.pagination_id, this.fetch_url, this.show_page_callback, this.items_by_page, this.total_items, this.visible_pages, filter_text);
      }
    };

    return Pagination;

  })();
  if ((base = root.Pagination).instance == null) {
    base.instance = {};
  }
  if ((base1 = root.Pagination.instance)[pagination_id] == null) {
    base1[pagination_id] = new Pagination(pagination_id, fetch_url, show_page_callback, items_by_page, total_items, visible_pages);
  }
  return root.Pagination.instance[pagination_id];
};

$.extend($.fn, {
  ajaxpagination: function(fetch_url, show_page_callback, items_by_page, total_items, visible_pages) {
    var el, paginations;
    if (fetch_url == null) {
      fetch_url = '';
    }
    if (show_page_callback == null) {
      show_page_callback = function() {};
    }
    if (items_by_page == null) {
      items_by_page = 1;
    }
    if (total_items == null) {
      total_items = 100;
    }
    if (visible_pages == null) {
      visible_pages = 9;
    }
    paginations = (function() {
      var j, len, results;
      results = [];
      for (j = 0, len = this.length; j < len; j++) {
        el = this[j];
        results.push(new root.Pagination('#' + $(el).attr('id'), fetch_url, show_page_callback, items_by_page, total_items, visible_pages));
      }
      return results;
    }).call(this);
    if (paginations.length === 1) {
      paginations = paginations[0];
    }
    return paginations;
  }
});

$(function() {
  return $('#pagination').ajaxpagination('', function(page) {
    return $('#page').html(page.page_number);
  });
});

// ---
// generated by coffee-script 1.9.2
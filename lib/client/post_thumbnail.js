Template[getTemplate('postThumbnailTitle')].helpers({
  postLink: function () {
    return !!this.url ? getOutgoingUrl(this.url) : "/posts/"+this._id;
  },
  playVideoClass: function () {
    return !!this.media ? 'post-thumbnail-has-video': '';
  },
  videoTemplate: function () {
    return getTemplate('postVideoTitle');
  }
});

Template[getTemplate('postThumbnailTitle')].events({
  'click .post-thumbnail-has-video': function (e) {
    e.preventDefault();
    $('body').addClass('showing-lightbox');
    $(e.target).parents('.post').find('.post-video-lightbox').fadeIn('fast');
  }
})